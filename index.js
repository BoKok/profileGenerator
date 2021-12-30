
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const generateEngineer = require('./generateEngineer');
const generateIntern = require('./generateIntern');
const fs = require('fs');
const questions = [];
const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Team manager name',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerID',
        message: 'Manager ID',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Manager Email',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the Email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: 'Manager Office Number',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the office number!');
            return false;
          }
        }
      }
    ])
    .then(data => {
        questions.push(data)
        console.log(questions);
        fs.writeFile("./index.html", generateMarkdown(questions), err => {
          if (err) throw err;
          console.log("File successfully written");
      })
        
    });
};

const promptMembers = () => {
    return inquirer.prompt([
       {
        type: 'list',
        name: 'continue',
        message: 'Add a team member?',
        choices: ['Engineer', 'Intern', 'Done']
      },
      {
        type: 'input',
        name: 'engineerName',
        message: 'Engineer name',
        when(answer) {
            return answer.continue === 'Engineer'
        },
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerID',
        message: 'Engineer ID',
        when(answer) {
            return answer.continue === 'Engineer'
        },
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Engineer Email',
        when(answer) {
            return answer.continue === 'Engineer'
        },
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the Email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'Engineer Github username',
        when(answer) {
            return answer.continue === 'Engineer'
        },
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internName',
        message: 'Intern name',
        when(answer) {
            return answer.continue === 'Intern'
        },
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internID',
        message: 'Intern ID',
        when(answer) {
            return answer.continue === 'Intern'
        },
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Intern Email',
        when(answer) {
            return answer.continue === 'Intern'
        },
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the Email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Intern school',
        when(answer) {
            return answer.continue === 'Intern'
        },
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the school!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to add another member?',
        default: true,
      },
      
    ])
    .then(data => {
        if (data.continue === 'Intern') {
          fs.appendFile("./index.html", generateIntern(data), err => {
            if (err) throw err;
            console.log("File successfully written");
        })
        };
        if (data.continue === 'Engineer') {
          fs.appendFile("./index.html", generateEngineer(data), err => {
            if (err) throw err;
            console.log("File successfully written");
        })
        };
        if (data.askAgain) {     
          promptMembers();
      } else {
        fs.appendFile("./index.html", '</div> </body> </HTML>', err => {
          if (err) throw err;
          console.log("File successfully written");
      })
      }
    })
  };


promptManager()
.then(promptMembers)
