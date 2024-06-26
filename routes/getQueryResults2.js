// This is a server side file!
// An example of reading requests from the client and sending back the query results to the client.
const fs = require('fs');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Poe<3sweaters',
    database: 'ANIMALS'
});

router.post('/', (req, res) => {
    // return res.end("ETST")
// connect to the MySQL database
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL database:', error);
        } else {
            // Sending this query results back to the client.
            connection.query(
                "SELECT * FROM bird WHERE in_north_america = 'Y' ",
                function (err, rows) {
                    if (rows === undefined) {
                        console.log("jhfjfjfj")
                    } else {
                        console.log(rows)
                        text = ""
                        for (let i = 0; i < rows.length; i++) {
                            text += rows[i].bird_ID + ","
                            text += rows[i].diet_type + ","
                            text += rows[i].lifespan + ","
                            text += rows[i].birpic + ","
                            text += "\n";
                        }
                        return res.end(text);
                    }
                }
            )
        }
        console.log('Connected to MySQL database!');
    });
});

// close the MySQL connection
// connection.end();


module.exports = router;

