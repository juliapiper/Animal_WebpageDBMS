// This is the client side request being made to the server.

function getQueryResults() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let queryResults = xhr.response;
            queryResults = queryResults.toString().split("\n");

            for (let i = 0; i < queryResults.length; i++) {
                let query = queryResults[i].toString().split(",");
                if (query.length >= 3) { // Ensure there's enough data
                    // Update ID, diet, and lifespan
                    document.getElementById("mammal_ID" + (i ? i : "")).innerHTML = "Mammal: " + query[0];
                    document.getElementById("diet_type" + (i ? i : "")).innerHTML = "Diet: " + query[1];
                    document.getElementById("lifespan" + (i ? i : "")).innerHTML = "Lifespan (years): " + query[2];

                    // Check if image path is valid before updating
                    if (query[3] && query[3].trim() !== "") {
                        document.getElementById("mampic" + i).src = query[3].trim();
                    }
                }
            }
        }
    };
    xhr.send("");
}


function getQueryResults2() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults2', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let queryResults = xhr.response.toString().split("\n");
            for (let i = 0; i < queryResults.length; i++) {
                let query = queryResults[i].split(",");
                if (query.length >= 3) {
                    document.getElementById("bird_ID" + (i ? i : "")).innerHTML = "Bird: " + query[0];
                    document.getElementById("diet_type" + (i ? i : "") + "b").innerHTML = "Diet: " + query[1];
                    document.getElementById("lifespan" + (i ? i : "") + "b").innerHTML = "Lifespan (years): " + query[2];
                    if (query[3] && query[3].trim() !== "") {
                        document.getElementById("birpic" + i).src = query[3].trim();
                    }
                }
            }
        }
    };
    xhr.send("");
}

function getQueryResults3() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults3', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let queryResults = xhr.response.toString().split("\n");
            for (let i = 0; i < queryResults.length; i++) {
                let query = queryResults[i].split(",");
                if (query.length >= 3) {
                    document.getElementById("insect_ID" + (i ? i : "")).innerHTML = "Insect: " + query[0];
                    document.getElementById("diet_type" + (i ? i : "") + "i").innerHTML = "Diet: " + query[1];
                    document.getElementById("lifespan" + (i ? i : "") + "i").innerHTML = "Lifespan (years): " + query[2];
                    if (query[3] && query[3].trim() !== "") {
                        document.getElementById("inspic" + i).src = query[3].trim();
                    }
                }
            }
        }
    };
    xhr.send("");
}