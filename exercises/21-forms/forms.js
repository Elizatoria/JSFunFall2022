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
  const textbox = document.querySelector("#Textbox");
  const mystery = document.querySelector("#Mystery");
  textbox.addEventListener("input", (event) => {
    mystery.textContent = event.target.value;
});
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
  document.querySelector("#Searching").addEventListener("submit", event => {
    event.preventDefault(); 
    const oceans = document.querySelector("#Ocean").value;
    document.querySelector("#Answer").textContent = `No results for ${oceans} found`;
  });
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
  const check = document.querySelector("#check");
  const disagree = document.querySelector("#disagree");
  const agree = document.querySelector("#agree");
  const checkbox = document.querySelector("#check");

  const showTermsError = () => {
    if (!check.classList.contains("is-invalid")) {
      check.classList.add("is-invalid");
    }

if (!agree.classList.contains("hidden")) {
  agree.classList.add("hidden");
}

if (disagree.classList.contains("hidden")) {
  disagree.classList.remove("hidden");
}
};

const showTermsSuccess = () => {
  if (check.classList.contains("is-invalid")) {
    check.classList.remove("is-invalid");
  }

  if (agree.classList.contains("hidden")) {
    agree.classList.remove("hidden");
  }

  if (!disagree.classList.contains("hidden")) {
    disagree.classList.add("hidden");
  }
};

document.querySelector("#termsForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkbox.checked) {
    showTermsSuccess();
  } else {
    showTermsError();
  }
});

})();
