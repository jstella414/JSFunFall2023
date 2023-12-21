(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

const dropDown = document.querySelector("#dropdown");
const displayImg = document.querySelector("#get-schwifty")
const ImgLink = document.querySelector("#main-img")
const dropdownElement = document.createElement("option");
const titleText = document.querySelector("#title-head")


dropDown.appendChild(dropdownElement);

let htmlStr = "";
let displayImgstr = "";
axios({
  url: "https://rickandmortyapi.com/api/character", 
  method: "GET",

}).then((response) => {
  // console.log("hello", response);
  // console.log(response.data.results)
  for(let character of response.data.results){
    htmlStr += `<option value ="${character.id}">${character.name}</option>`;    
    //console.log(character);
    // dropdown.addEventListener("click" () =>{
    //   storedCharacter += htmlStr});
  }dropDown.innerHTML = htmlStr;



}).catch(()=>{});


//const request = fetch("https://rickandmortyapi.com/api/character/" + e.target.value).then(response)=> response.json

dropdown.addEventListener("change",(e)=>{
  //const request = fetch("https://rickandmortyapi.com/api/character/" + e.target.value).then(response) => response.json
  
  axios({
    method: 'GET',
    url: "https://rickandmortyapi.com/api/character/" + e.target.value
  })
  .then((response) =>{
    console.log(response.data);
    titleText.textContent = response.data.name
    displayImg.src = response.data.image;
    displayimg.href = "http://rickandmorty.wikia.com/wiki/Rick_Sanchez$#http://rickandmorty.wikia.com/wiki/Rick_Sanchez"
  })
  .catch(err =>{});
  


})




})();





