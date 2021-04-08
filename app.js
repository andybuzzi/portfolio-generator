// to use fs module this needs to be written at the top of the file
const fs = require("fs");
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// FIRST ARG: file name, SECOND ARG: the data that's being written. THIRD ARG: callback function to handle any errors.
fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the input!");
});
