var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type ", mainTitle.nodeType );
console.log("The inner HTML is " , mainTitle.innerHTML );
console.log("Child nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var myListItems = document.getElementsByTagName("li");
var myFirstList = document.getElementById("quickNav");
var limitedList = myFirstList.getElementsByTagName("li");
console.log(limitedList);
console.log(myFirstList);







