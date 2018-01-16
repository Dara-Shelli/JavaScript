


let item = "oranges";
let item2 = "apples";
let item3 = "raspberies";

let groceries = [
'apples'
'oranges'
'raspberies'
];


 groceries.shift();
 groceries.unshift("cucumber"); // on forst position


groceries.pop();
 groceries.push("tomatoes");


 groceries.splice(1, 0, "something");


 // let copyOfGroceries = groceries;
    // let copyOfGroceries = groceries.slice();  - old way 
    let copyOfGroceries = [...groceries]; // new way


 copyOfGroceries.unshift("hell world");

 console.log("groceries", groceries);
 console.log("copyOfGroceries", copyOfGroceries );




for (let i = 0; i < groceries.length; i++){
	console.log( groceries[i], i);
}


groceries.forEach(function(item){
	console.log(item);
})



