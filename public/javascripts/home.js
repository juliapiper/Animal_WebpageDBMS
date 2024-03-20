// This is the client side request being made to the server.

function getQueryResults() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")
            // Inserting the data the first resutl to HTML
            firstQuery = queryResults[0].toString().split(",")
            document.getElementById("mammal_ID").innerHTML = "Mammal: " + firstQuery[0].toString()
            document.getElementById("image001").src = firstQuery[2].toString()
            document.getElementById("diet_type").innerHTML = "Diet: " + firstQuery[1].toString()
            document.getElementById("lifespan").innerHTML = "Lifespan (years): " + firstQuery[2].toString()

            secondQuery = queryResults[1].toString().split(",")
            document.getElementById("mammal_ID1").innerHTML = "Mammal: " + secondQuery[0].toString()
            document.getElementById("image0011").src = secondQuery[2].toString()
            document.getElementById("diet_type1").innerHTML = "Diet: " + secondQuery[1].toString()
            document.getElementById("lifespan1").innerHTML = "Lifespan (years): " + secondQuery[2].toString()

            thirdQuery = queryResults[2].toString().split(",")
            document.getElementById("mammal_ID2").innerHTML = "Mammal: " + thirdQuery[0].toString()
            document.getElementById("image0012").src = thirdQuery[2].toString()
            document.getElementById("diet_type2").innerHTML = "Diet: " + thirdQuery[1].toString()
            document.getElementById("lifespan2").innerHTML = "Lifespan (years): " + thirdQuery[2].toString()

            fourthQuery = queryResults[3].toString().split(",")
            document.getElementById("mammal_ID3").innerHTML = "Mammal: " + fourthQuery[0].toString()
            document.getElementById("image0013").src = fourthQuery[2].toString()
            document.getElementById("diet_type3").innerHTML = "Diet: " + fourthQuery[1].toString()
            document.getElementById("lifespan3").innerHTML = "Lifespan (years): " + fourthQuery[2].toString()

            fifthQuery = queryResults[4].toString().split(",")
            document.getElementById("mammal_ID4").innerHTML = "Mammal: " + fifthQuery[0].toString()
            document.getElementById("image0014").src = fifthQuery[2].toString()
            document.getElementById("diet_type4").innerHTML = "Diet: " + fifthQuery[1].toString()
            document.getElementById("lifespan4").innerHTML = "Lifespan (years): " + fifthQuery[2].toString()


        }
    };
    xhr.send("");
}


function getQueryResults2() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults2', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")
            // Inserting the data the first resutl to HTML
            firstQuery = queryResults[0].toString().split(",")
            document.getElementById("bird_ID").innerHTML = "Bird: " + firstQuery[0].toString()
            document.getElementById("image001").src = firstQuery[2].toString()
            document.getElementById("diet_typeb").innerHTML = "Diet: " + firstQuery[1].toString()
            document.getElementById("lifespanb").innerHTML = "Lifespan (years): " + firstQuery[2].toString()

            secondQuery = queryResults[1].toString().split(",")
            document.getElementById("bird_ID1").innerHTML = "Bird: " + secondQuery[0].toString()
            document.getElementById("image0011").src = secondQuery[2].toString()
            document.getElementById("diet_type1b").innerHTML = "Diet: " + secondQuery[1].toString()
            document.getElementById("lifespan1b").innerHTML = "Lifespan (years): " + secondQuery[2].toString()

            thirdQuery = queryResults[2].toString().split(",")
            document.getElementById("bird_ID2").innerHTML = "Bird: " + thirdQuery[0].toString()
            document.getElementById("image0012").src = thirdQuery[2].toString()
            document.getElementById("diet_type2b").innerHTML = "Diet: " + thirdQuery[1].toString()
            document.getElementById("lifespan2b").innerHTML = "Lifespan (years): " + thirdQuery[2].toString()

            fourthQuery = queryResults[3].toString().split(",")
            document.getElementById("bird_ID3").innerHTML = "Bird: " + fourthQuery[0].toString()
            document.getElementById("image0013").src = fourthQuery[2].toString()
            document.getElementById("diet_type3b").innerHTML = "Diet: " + fourthQuery[1].toString()
            document.getElementById("lifespan3b").innerHTML = "Lifespan (years): " + fourthQuery[2].toString()

            fifthQuery = queryResults[4].toString().split(",")
            document.getElementById("bird_ID4").innerHTML = "Bird: " + fifthQuery[0].toString()
            document.getElementById("image0014").src = fifthQuery[2].toString()
            document.getElementById("diet_type4b").innerHTML = "Diet: " + fifthQuery[1].toString()
            document.getElementById("lifespan4b").innerHTML = "Lifespan (years): " + fifthQuery[2].toString()


        }
    };
    xhr.send("");
}