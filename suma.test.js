const sumap = require('./suma.js');

test('2 + 5 = 7', () =>{
    expect(sumap(2,5)).toBe(7);
});

test('5 + 5 = 10', () =>{
    expect(sumap(5,5)).toBe(10);
});
