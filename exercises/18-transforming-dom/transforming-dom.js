/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const img = document.querySelector("img");
  const src = img.src;
  img.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  const firefox = document.querySelector("#FireFox");
  const href = firefox.href;
  firefox.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const vic = document.querySelector("#Victorious"); //Got stuck here
  const textContent = vic.textContent;
  vic.textContent = "I am victorious!";

  const alertInfo = document.querySelector("#inline");
  alertInfo.style.backgroundColor = "#ff0000";

  const textColor = document.querySelector("#textColor");
  textColor.classList.add("text-muted");

  document.querySelector("#hide").style.display = "none";

  document.querySelector("#Boo").classList.remove("hidden");

  const button = document.querySelector(".my-Button");
  if (button.classList.contains("btn-primary")) {
  button.textContent = "✓ blue";
  }
})();
