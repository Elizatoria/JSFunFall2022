// STEP 1: Target
const addExtraCheese = document.querySelector("#addExtraCheese");
const confirm = document.querySelector("#confirm");
// STEP 2: React to an event
addExtraCheese.addEventListener("change", (event) => {
  let shouldAddExtraCheese = event.target.checked;
  if (shouldAddExtraCheese) {
    // show &check; Extra Cheese
    confirm.textContent = "✓ Extra Cheese";
  } else {
    // ""
    confirm.textContent = "";
  }
});