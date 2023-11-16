/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here


const firstLi = document.querySelector("li");
console.log(firstLi)

const link = document.querySelector("#myId");
console.log(link)

const warning = document.querySelectorAll(".bg-warning");
for(let text of warning){
  console.log(text)

};


document.querySelectorAll("section");
const targetMe = document.querySelector("#targetMe");

console.log(targetMe)

const hyperLinks = document.querySelectorAll('.hyperlinks');
for (let link of hyperLinks){
  console.log(link)

}

const links = document.querySelectorAll("#socialsmedia");
for (let link of links) {
  console.log(link);
}


const row = document.querySelectorAll("#myRow");
for (let cells of row) {
  console.log(cells);
}


})();