!(function () {
  const AutobotButton = document.createElement("button");
  AutobotButton.textContent = "Autobot";
  AutobotButton.style.backgroundColor = "red";
  AutobotButton.style.color = "white";
  AutobotButton.classList.add("Autobot");
  document.querySelector("body").appendChild(AutobotButton);
  document.querySelector(".Autobot").addEventListener("click", event => {
    const AutobotText = document.querySelector("#Autobot");
    AutobotText.textContent = alert(`Freedom is the right of all Sentient Beings! You are an Autobot`);
  });
  
  const DecepticonButton = document.createElement("button");
  DecepticonButton.textContent = "Decepticon";
  DecepticonButton.style.backgroundColor = "purple";
  DecepticonButton.style.color = "white";
  DecepticonButton.classList.add("Decepticon");
  document.querySelector("body").appendChild(DecepticonButton);
  document.querySelector(".Decepticon").addEventListener("click", event => {
    const DecepticonText = document.querySelector("#Decepticon");
    DecepticonText.textContent = alert(`Peace through tyranny! You are a Decepticon.`);
  });
})();