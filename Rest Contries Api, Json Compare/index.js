let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};
console.log(obj1 === obj2)

fetch ("https://restcountries.com/v3.1/all")
 .then(response => response.json())
 .then((data) => {
    for (var x in data)
    {console.log(data[x].flags)}       
    });

    fetch ("https://restcountries.com/v3.1/all")
 .then(response => response.json())
 .then((data) => {
    console.log(data);
    for ( var x  in data){
        console.log(data[x].name) 
        console.log(data[x].region) 
        console.log(data[x].subregion) 
        console.log(data[x].population) 
    }});
    

