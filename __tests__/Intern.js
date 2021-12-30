
// using Intern constructor 
const Intern = require('./generateIntern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Engineer('Bo', 1, 'kokbo@yahoo.com', 'bokok');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Bo', 1, 'kokbo@yahoo.com', 'bokok');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Bo', 1, 'kokbo@yahoo.com', 'bokok');

    expect(intern.getRole()).toEqual("Intern");
}); 