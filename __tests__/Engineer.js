
const Engineer = require('./generateEngineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Bo', 1, 'kokbo@yahoo.com', 'bokok');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
const engineer = new Engineer('Bo', 1, 'kokbo@yahoo.com', 'bokok');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Bo', 1, 'kokbo@yahoo.com', 'bokok');

    expect(engineer.getRole()).toEqual("Engineer");
});