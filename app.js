const inquirer = require("inquirer");
console.log(inquirer);

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
// // to use fs module this needs to be written at the top of the file
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// // FIRST ARG: file name, SECOND ARG: the data that's being written. THIRD ARG: callback function to handle any errors.
// fs.writeFile("index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the input!");
// });
