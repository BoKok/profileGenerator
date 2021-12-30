function generateEngineer(data) {
    const {engineerName, engineerID, engineerEmail, engineerGithub} = data;

      return `
      <div class="tBoxes column">
      <h1>${engineerName}</h1>
      <h1>Manager</h1>
      <div class="bBoxes">
          <p>ID: ${engineerID}</p>
          <p>Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></p>
          <p>Github: <a href="https://github.com/${engineerGithub} target="_blank"">${engineerGithub}</a></p>
      </div>
  </div>    
    `
    ;
    
    }
    
    module.exports = generateEngineer;