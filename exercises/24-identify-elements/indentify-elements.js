(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * show a thank message with the plan's name inside of the aqua green notification at the top of the screen.
   *
   * For example, if the user chooses "Premium", display:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here

  const buttons = document.querySelectorAll(".button");
  
  //hide this before the user selects a plan
  const notification = document.querySelector(".notification");
  
  //change the text content of this to whatever the plan is
  const notificationMessage = document.querySelector("#notificationMessage");

//button to exit
const exitButton = document.querySelector(".delete")

  buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
      notification.classList.remove('hidden');
      notificationMessage.textContent = `Thank you for purchasing the ${button.id} plan!`

    })

})
exitButton.addEventListener("click", () => {
  if(notification.classList.contains('hidden')){
    notification.classList.remove('hidden');

  }else{
    notification.classList.add('hidden');
  }
})


})();
