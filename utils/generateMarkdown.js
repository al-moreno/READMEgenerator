
function generateMarkdown(data) {
  return `
![GitHub](https://img.shields.io/badge/license-${data.license}-blue)
  
# ${data.title}

## Description
${data. description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributors)
* [Tests](#tests)
* [License](#license)
* [Questions](#username)






## Installation
${data.installation} 



## Usage
${data.usage}

## Contributing
${data.contributors}

## Test
 ${data.test}


## License
${data.license}



## Questions
${data.username}
${data.email}

`
};

module.exports = generateMarkdown;