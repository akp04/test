function loadDoc() {     
            //alert("fetching get request");
            var xhttp = new XMLHttpRequest();
            var url = "server/players";

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 /*&& xhttp.status == 200 */ ) {
                    var jsonArr = JSON.parse(xhttp.responseText);
                    //showArr(jsonArr);
                    //console.log(jsonArr);
                    document.getElementById("showData").innerHtml= "Done!";
                }
            };
            xhttp.open('GET',url,true);
            xhttp.send();
         }