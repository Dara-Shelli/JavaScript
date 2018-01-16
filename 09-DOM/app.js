// ex-1

let frame = document.body;
frame.classList.remove("bg-aqua");
frame.classList.add("bg-olive");


let firstPar = document.getElementById("first-paragraph");
firstPar.classList.remove("bg-lime");
firstPar.classList.remove("gray");
firstPar.classList.add("aqua");


let allItems = document.querySelectorAll('.bg-silver');
console.log(allItems);

for (var i = 0; i < allItems.length; i++) {
	allItems[i].classList.remove("bg-silver");
	allItems[i].classList.add("bg-teal");
}

let blockquote = document.getElementsByTagName("blockquote");

for (var i = 0; i < blockquote.length; i++) {
	blockquote[i].classList.add("bg-white");
}

// ex-2

let myTable = document.querySelector('#my-table');
myTable.classList.add( "bg-purple");

 let cont = document.querySelectorAll('.container > p');
 for (var i = 0; i < cont.length; i++) {
 	cont[i].classList.add('shadow');
 }
 
 //  ex-3

 let ellementsPre = document.getElementsByTagName("pre");
 for (var i = 0; i < ellementsPre.length; i++) {
 	ellementsPre[i].style.color = ("blue");
 	ellementsPre[i].style.backgroundColor = ("green");
 	ellementsPre[i].style.borderTop = ("3px solid red");
 	ellementsPre[i].style.borderBottom = ('3px solid red');
 }

 let h3One = document.getElementsByTagName("h3")[0];
 h3One.innerHTML = "<em>Itelic title! yeah !</em>";

 let h2First = document.getElementsByTagName("h2")[0];
 h2First.innerText = "<strong>HTML doens't work !</strong>";
 h2First.style.color = ("red")



 //Exo 4 : Création d'éléments

let ulFirst = document.getElementsByTagName("ul")[0];

let li = document.createElement("li");
li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'"
ulFirst.appendChild(li);

let link = li.querySelector("a");
link.style.color = ("red");


//Exo 5 : Création et suppression de plusieurs éléments

let olFirst = document.getElementsByTagName("ol")[0];
let olChildren = olFirst.children;

for (var i = (olChildren.length -1); i >= 0; i--) {
  olFirst.removeChild(olChildren[i]);
}

let tab = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (var i = (tab.length-1); i >= 0; i--) {
  let newLi = document.createElement("li");
    newLi.innerText = tab[i];
    olFirst.appendChild(newLi);






