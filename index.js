// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
// const questions {
//   type: 'input',
//   name: 'name',
//   message: 'What is your name?',
// },
// {
//   type: 'input',
//   message: 'What is your location?',
//   name: 'USA',
// },
// {
//   type: 'input',
//   message: 'What is your github?',
//   name: 'site',
// },
// {
//   type: 'input',
//   message: 'license?',
//   name: 'license',
// }
// ])

//This is the main function that initializes the generator

function init() {
  inquirer
    .prompt(questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your application name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your application description?',
      },
      {
        type: 'input',
        message: 'what is this use for?',
        name: 'usage',
      },
      {
        type: 'input',
        message: "describe how to install",
        name: 'installation'
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'are there any contributors?',
      },
      {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3', 'MIT License', 'The Unlicense'],
      name: 'license',
  },
  {
    type: 'input',
    name: 'github',
    message: 'what is your github?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  }

    ])

    .then((data) => {
      // const fileContent = `${data.name.toLowerCase().split(' ').join('')}.json`;
      const fileName = `${data.title}.md`;



      fs.writeFile(`readmes/${fileName}`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success! you have generated a readme file')


      );
    });
}






// Function call to initialize app
init();
