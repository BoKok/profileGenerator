function generateMarkdown(questions) {
    const {managerName, managerID, managerEmail, managerOffice} = questions[0];
    const {engineerName, engineerID, engineerEmail, engineerGithub} = questions[1];

      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <h1>${managerName}</h1>
          <h1>${managerID}</h1>
          <h1>${managerEmail}</h1>
          <h1>${managerOffice}</h1>
          <h1>${engineerName}</h1>
          <h1>${engineerID}</h1> 
          <h1>${engineerEmail}</h1>
          <h1>${engineerGithub}</h1>  
      </body>
      </html>
    `
    ;
    
    }
    
    module.exports = generateMarkdown;