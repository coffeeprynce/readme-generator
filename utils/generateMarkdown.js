// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenses) {
  const license = ['GNU AGPLv3', 'MIT License', 'Mozilla Public License 2.0'];

if (license === 'GNU AGPLv3') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg]'
}
if (license === 'MIT License') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
}
if (license === 'Mozilla Public License 2.0') {
  return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'

  

};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  const license = ['GNU AGPLv3', 'MIT License','Mozilla Public License 2.0'
];

if (license === 'GNU AGPLv3') {
  return '(https://www.gnu.org/licenses/agpl-3.0)'
}
if (license === 'MIT License') {
  return '(https://opensource.org/licenses/MIT)'
}
if (license === 'Mozilla Public License 2.0')
return '(https://opensource.org/licenses/MPL-2.0)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  Description
  
  ##table of contents
  
  usage
  installation
  license
  
  this is a readme file for a generator that takes in user inputs and create a beautiful template for their own readme.
  `;
}

module.exports = generateMarkdown;
