function generateIntern(data) {
    const {internName, internID, internEmail, internSchool} = data;
      return `
      <div class="tBoxes column">
      <h1>${internName}</h1>
      <h1>Manager</h1>
      <div class="bBoxes">
          <p>ID: ${internID}</p>
          <p>Email: <a href="mailto:${internEmail}">${internEmail}</a></p>
          <p>School: ${internSchool}</p>
      </div>
  </div>
    `
    ;
    
    }
    
    module.exports = generateIntern;