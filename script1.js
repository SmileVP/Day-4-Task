//Question 3

var res=new XMLHttpRequest();
res.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.send();
res.onload=function(){
    var details=JSON.parse(res.response);
    for(var i=0;i<details.length;i++){
        console.log(details[i].name);
        console.log(details[i].region);
        console.log(details[i].subregion);
        console.log(details[i].population);
    }
    
    
}