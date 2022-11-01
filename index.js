// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const utils = require('utils');
// const generateMarkdown = require('./utils/generateMarkdown');

// const api = require('./utils/api.js');




// TODO: Create an array of questions for user input
// const questions = ['what is your name?','What is your location?','What is your github?'];

const profile = {
    name: "kyle",
    location: "the Dmv",
    github: "coffeeprynce",
    linkedin: "N/A"
  };
  
  const greeting = `My name is ${profile.name}!
  I am from ${profile.location}.`;
  
  console.log(greeting);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'USA',
    },
    {
      type: 'input',
      message: 'What is your github?',
      name: 'site',
    },
    {type: 'input',
    message: 'license?',
    name: 'license',
    }
  ])

  .then((data) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')


    );
  });


//   fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to write README file




 

// TODO: Create a function to initialize app
function init() {}




// Function call to initialize app
init();
