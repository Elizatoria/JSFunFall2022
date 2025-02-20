!(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
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
  const buttons = document.querySelectorAll("[data-plans]");
  const notification = document.querySelector("#notification");
  const notice =document.querySelector("#notice");

  buttons.forEach((option) => {
    option.addEventListener("click", () => {
      const plan = option.getAttribute("data-plans");
      notification.textContent = `Thank you for purchasing the ${plan} plan!`;
      notice.classList.remove("hidden");
    });
  });
})();
