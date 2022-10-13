const fullname = "Coco Chanel";
const index = fullname.indexOf(" ");
const lastname = fullname.substring(index + 1);
console.log(lastname);

const firstname = fullname.substring(0, index);
console.log(firstname);