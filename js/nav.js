$.$.ajax({
    type: "method",
    url: "../",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});
function loadNavigation() 
{  
    var ajaxRequest = new XMLHttpRequest();
    XMLHttpRequestObjectName.open("GET","../html/nav.html",true);
    XMLHttpRequestObjectName.send();
}

//XMLHttpRequestObjectName.onreadystatechange = 
window.onload = loadNavigation();