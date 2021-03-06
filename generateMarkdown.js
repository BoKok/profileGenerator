function generateMarkdown(questions) {
    const {managerName, managerID, managerEmail, managerOffice} = questions[0];

      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="style.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
          <title>Document</title>
      </head>
      <body>
          <h1 class="top">My Team</h1>
          <div class="columns">
      
              <div class="tBoxes column">
                  <h1>${managerName}</h1>
                  <h1>Manager</h1>
                  <div class="bBoxes">
                      <p>ID: ${managerID}</p>
                      <p><a href="mailto:${managerEmail}">${managerEmail}</a></p>
                      <p>Office Number: ${managerOffice}</p>
                  </div>
              </div>
    `
    ;
    
    }
    
    module.exports = generateMarkdown;