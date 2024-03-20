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

            sixthQuery = queryResults[5].toString().split(",")
            document.getElementById("mammal_ID5").innerHTML = "Mammal: " + sixthQuery[0].toString()
            document.getElementById("image0015").src = sixthQuery[2].toString()
            document.getElementById("diet_type5").innerHTML = "Diet: " + sixthQuery[1].toString()
            document.getElementById("lifespan5").innerHTML = "Lifespan (years): " +sixthQuery[2].toString()

            seventhQuery = queryResults[6].toString().split(",")
            document.getElementById("mammal_ID6").innerHTML = "Mammal: " + seventhQuery[0].toString()
            document.getElementById("image0016").src = seventhQuery[2].toString()
            document.getElementById("diet_type6").innerHTML = "Diet: " + seventhQuery[1].toString()
            document.getElementById("lifespan6").innerHTML = "Lifespan (years): " + seventhQuery[2].toString()

            eigthQuery = queryResults[7].toString().split(",")
            document.getElementById("mammal_ID7").innerHTML = "Mammal: " + eigthQuery[0].toString()
            document.getElementById("image0017").src = eigthQuery[2].toString()
            document.getElementById("diet_type7").innerHTML = "Diet: " + eigthQuery[1].toString()
            document.getElementById("lifespan7").innerHTML = "Lifespan (years): " + eigthQuery[2].toString()





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

            sixthQuery = queryResults[5].toString().split(",")
            document.getElementById("bird_ID5").innerHTML = "Bird: " + sixthQuery[0].toString()
            document.getElementById("image0015").src = sixthQuery[2].toString()
            document.getElementById("diet_type5b").innerHTML = "Diet: " + sixthQuery[1].toString()
            document.getElementById("lifespan5b").innerHTML = "Lifespan (years): " +sixthQuery[2].toString()

            seventhQuery = queryResults[6].toString().split(",")
            document.getElementById("bird_ID6").innerHTML = "Bird: " + seventhQuery[0].toString()
            document.getElementById("image0016").src = seventhQuery[2].toString()
            document.getElementById("diet_type6b").innerHTML = "Diet: " + seventhQuery[1].toString()
            document.getElementById("lifespan6b").innerHTML = "Lifespan (years): " + seventhQuery[2].toString()

            eigthQuery = queryResults[7].toString().split(",")
            document.getElementById("bird_ID7").innerHTML = "Bird: " + eigthQuery[0].toString()
            document.getElementById("image0017").src = eigthQuery[2].toString()
            document.getElementById("diet_type7b").innerHTML = "Diet: " + eigthQuery[1].toString()
            document.getElementById("lifespan7b").innerHTML = "Lifespan (years): " + eigthQuery[2].toString()



        }
    };
    xhr.send("");
}

function getQueryResults3() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/getQueryResults3', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // The results of the query are caught here and are posted as an alert.
            queryResults = xhr.response
            // Creates a list of all the results from the Query
            queryResults = queryResults.toString().split("\n")
            // Inserting the data the first resutl to HTML
            firstQuery = queryResults[0].toString().split(",")
            document.getElementById("insect_ID").innerHTML = "Insect: " + firstQuery[0].toString()
            document.getElementById("image001").src = firstQuery[2].toString()
            document.getElementById("diet_typei").innerHTML = "Diet: " + firstQuery[1].toString()
            document.getElementById("lifespani").innerHTML = "Lifespan (years): " + firstQuery[2].toString()

            secondQuery = queryResults[1].toString().split(",")
            document.getElementById("insect_ID1").innerHTML = "Insect: " + secondQuery[0].toString()
            document.getElementById("image0011").src = secondQuery[2].toString()
            document.getElementById("diet_type1i").innerHTML = "Diet: " + secondQuery[1].toString()
            document.getElementById("lifespan1i").innerHTML = "Lifespan (years): " + secondQuery[2].toString()

            thirdQuery = queryResults[2].toString().split(",")
            document.getElementById("insect_ID2").innerHTML = "Insect: " + thirdQuery[0].toString()
            document.getElementById("image0012").src = thirdQuery[2].toString()
            document.getElementById("diet_type2i").innerHTML = "Diet: " + thirdQuery[1].toString()
            document.getElementById("lifespan2i").innerHTML = "Lifespan (years): " + thirdQuery[2].toString()

            fourthQuery = queryResults[3].toString().split(",")
            document.getElementById("insect_ID3").innerHTML = "Insect: " + fourthQuery[0].toString()
            document.getElementById("image0013").src = fourthQuery[2].toString()
            document.getElementById("diet_type3i").innerHTML = "Diet: " + fourthQuery[1].toString()
            document.getElementById("lifespan3i").innerHTML = "Lifespan (years): " + fourthQuery[2].toString()

            fifthQuery = queryResults[4].toString().split(",")
            document.getElementById("insect_ID4").innerHTML = "Insect: " + fifthQuery[0].toString()
            document.getElementById("image0014").src = fifthQuery[2].toString()
            document.getElementById("diet_type4i").innerHTML = "Diet: " + fifthQuery[1].toString()
            document.getElementById("lifespan4i").innerHTML = "Lifespan (years): " + fifthQuery[2].toString()

            sixthQuery = queryResults[5].toString().split(",")
            document.getElementById("insect_ID5").innerHTML = "Insect: " + sixthQuery[0].toString()
            document.getElementById("image0015").src = sixthQuery[2].toString()
            document.getElementById("diet_type5i").innerHTML = "Diet: " + sixthQuery[1].toString()
            document.getElementById("lifespan5i").innerHTML = "Lifespan (years): " +sixthQuery[2].toString()

            seventhQuery = queryResults[6].toString().split(",")
            document.getElementById("insect_ID6").innerHTML = "Insect: " + seventhQuery[0].toString()
            document.getElementById("image0016").src = seventhQuery[2].toString()
            document.getElementById("diet_type6i").innerHTML = "Diet: " + seventhQuery[1].toString()
            document.getElementById("lifespan6i").innerHTML = "Lifespan (years): " + seventhQuery[2].toString()

            eigthQuery = queryResults[7].toString().split(",")
            document.getElementById("insect_ID7").innerHTML = "Insect: " + eigthQuery[0].toString()
            document.getElementById("image0017").src = eigthQuery[2].toString()
            document.getElementById("diet_type7i").innerHTML = "Diet: " + eigthQuery[1].toString()
            document.getElementById("lifespan7i").innerHTML = "Lifespan (years): " + eigthQuery[2].toString()



        }
    };
    xhr.send("");
}