function loadDoc() {     
            //alert("fetching get request");
            var xhttp = new XMLHttpRequest();
            var url = "http://localhost:3000/products";
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 /*&& xhttp.status == 200 */ ) {
                    var jsonArr = JSON.parse(xhttp.responseText);
                    //showArr(jsonArr);
                    console.log(jsonArr);
                }
            };
            xhttp.open('GET',url,true);
            xhttp.send();
         }