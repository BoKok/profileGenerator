
const inquirer = require('inquirer');
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
        return questions;
      });
  };

  const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Engineer name',
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
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the username!');
            return false;
          }
        }
      }
    ])
    .then(data => {
        questions.push(data)
        console.log(questions);
        return questions;
      });
  };

  const promptIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Intern name',
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
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the school!');
            return false;
          }
        }
      }
    ])
    .then(data => {
        questions.push(data)
        console.log(questions);
        return questions;
      });
  };

  

promptManager().then()