(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
  const dogButton =  document.querySelector("#dog-button");
  const image = document.querySelector('#image')
  
  dogButton.addEventListener("click", event => {

    axios({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
    
    }).then((response) => {
      // console.log("hello", response);
      image.src = response.data.message;
    }).catch(()=>{})
  });


})();
