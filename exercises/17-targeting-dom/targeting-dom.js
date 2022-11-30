/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here

  //Section Three
  const targetButton = document.querySelector("#Target");
  console.log(targetButton);
  
  const socialMedia = document.querySelectorAll(".Social");
  socialMedia.forEach(link => {
    console.log(link);
  });
})();
