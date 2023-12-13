(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here

//////////

const userType = document.querySelector("#userType");
const userTypeDisplay = document.querySelector("#userTypeDisplay");

userType.addEventListener("input", event =>{
  console.log("hello")
  userTypeDisplay.textContent = userType.value;
})

//////////
    //display what the user is typing in the Boxes
    //serach engine is inside of a form
    ///2. no results found for _blank
    ///agree to terms and conditions if users does not check box and hits Continue
    //remove inInvald class for if invalded and show and hide text

  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,//use a form
   * display the message "No results for ___ found" inside of this <p></p> below. // target this pp 
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here

  //////////////////////
const pointlessEngine = document.querySelector("#engineForm");
const displayText = document.querySelector("#EngineDisplayText")
const SearchResults = document.querySelector("#search-results")

pointlessEngine.addEventListener("submit", event => {
  event.preventDefault();
   let userText = SearchResults.value
  displayText.textContent = `No results for ${userText} found`;
  });

 //////////////////////
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To see an example of what this looks like:
   * When the page loads, @see terms-on-load.png
   * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
   * @see terms-on-error.png
   * When the user checks the "I Agree ..." checkbox and click "Continue",
   * @see terms-on-success.png
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
////////////////

  const checkbox = document.querySelector("#check-box");
  const continueButton = document.querySelector("#continue-button");
  const errorText = document.querySelector(".text-danger");
  const thankYouText = document.querySelector(".text-success");
  const FormCheckbox = document.querySelector("#form-checkbox");


  errorText.style.display = "none";
  thankYouText.style.display = "none";

  checkbox.addEventListener("click" , event =>{
    if(checkbox.checked){
      if(checkbox.classList.contains("is-invalid")){
        checkbox.classList.add("is-valid");
        checkbox.classList.remove("is-invalid");
        console.log("hello");
      }
    }else{
      checkbox.classList.remove("is-valid");
      checkbox.classList.add("is-invalid");
      console.log("NOT");
    }

  });

 FormCheckbox.addEventListener("submit", (event) => {


 });



  // checkbox.addEventListener("click" , event => {
  //   if(checkbox.classList.contains("is-invalid")){
  //     checkbox.classList.remove("is-invalid");
  //     checkbox.classList.add("is-valid");

  //   }else{
  //     checkbox.classList.remove("is-valid");
  //     checkbox.classList.add("is-invalid");
  //   }
  // });


  // continueButton.addEventListener("click", event =>{
  //   event.preventDefault();
  //   console.log("hello");
  //     if(checkbox.classList.contains("is-invalid")){
  //       errorText.style.display = "block";
  //       thankYouText.style.display = "none";

  //     }else{
  //       thankYouText.style.display = "block";
  //       errorText.style.display = "none";
  //     }

  //   });



  


})();
