
// using Manager constructor 
const Manager = require('./generateMarkdown');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Bo', 1, 'kokbo@yahoo.com', 'bokok');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Bo', 1, 'kokbo@yahoo.com', 'bokok');

    expect(manager.getRole()).toEqual("Manager");
}); 