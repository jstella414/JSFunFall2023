/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {



const img = document.querySelector('img');
img.src = 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif'

const link = document.querySelector('#link');
link.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
console.log(link)

const victory = document.querySelector('.alert-success');
victory.textContent = "I am victorious!";



const ConditionalBotton = document.querySelector('#alertConditionalBotton');
const buttonIsCorrect = document.querySelector('.conditionalText');


if (ConditionalBotton.classList.contains("btn-primary")) {
  buttonIsCorrect.textContent = "✓ blue";
}

/*Using conditional logic 
(e.g. an if statement), change the <div> below to say 
"✓ blue" if  has class btn-primary.
*/

// Put your answers in here

})();
