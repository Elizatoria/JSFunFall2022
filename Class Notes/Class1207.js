// STEP 1: Target
const name = document.querySelector("#name");
const message = document.querySelector("#message");
const displayText = (event) => {
  console.log(event.target.value);
  message.textContent = "Hi " + event.target.value;
};
// STEP 2: React to an event
name.addEventListener("input", displayText);