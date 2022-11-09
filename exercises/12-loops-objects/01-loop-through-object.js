/**
 * Loop through all properties within the "links" object
 * and return a list of HTML links.
 * @param {object} links e.g. { Text: "https://url.com" }
 * @returns {string} of <a> tags
 *
 * @example
 *
 * const links = {
 *   Dogs: "http://www.omfgdogs.com",
 *   Kittens: "https://giphy.com/search/kitten",
 *   "Hamster Dance": "https://hamster.dance/hamsterdance/",
 * };
 *
 * generateLinks(links);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 */

 const generateLinks = (links) => {
  // WRITE YOUR ANSWER HERE
  for (const key in links) {
      console.log(`<a href="${links[key]}"></a>`);
};};
generateLinks({Dogs: "http://www.omfgdogs.com",
  Kittens: "https://giphy.com/search/kitten",
 Hamster: "https://hamster.dance/hamsterdance/"})

 const generateLinks = (links) => {
  // WRITE YOUR ANSWER HERE
  let html = "";
  for (let title in links) {
    html += `<a href="${links[title]}">${title}</a>`;
  }
  return html;
};

// IGNORE THIS BELOW. It is for the tests.

export default generateLinks;
