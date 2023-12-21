(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */


  const quoteButton = document.querySelector("#quote-button")
const blockQuote = document.querySelector("#quote");

quoteButton.addEventListener("click", event =>{
 
  (async () => {
    try{
      let response = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      blockQuote.textContent = response.data;
      console.log(response.data)
    }catch (err) {
      return console.error('Error:', err);
   }


  })();

})


///catch` to display an error message onto the screen. You can fake a network outage by temporarily changing the URL to something that does not exist.



})();
