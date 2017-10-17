const functions = require('./functions');

test('should expect returnTwo() to equal 2', ()=> {
    expect(functions.returnTwo()).toEqual(2);
})

test('should expect greeting("james") to equal "Hello, James"', ()=> {
    expect(functions.greeting('James')).toEqual('Hello, James.');
    expect(functions.greeting("Jill")).toEqual("Hello, Jill.");
})

test("should expect add(1, 2) to equal 3", ()=> {
    expect(functions.add(1, 2)).toEqual(3);
    expect(functions.add(5, 9)).toEqual(14);
})

describe('Math function', ()=> {
    test('multiply', ()=> {
        expect(functions.multiply(1, 2)).toEqual(2)
    });
    test('divide', ()=> {
        expect(functions.divide(9, 3)).toEqual(3);
    });
    test('subtract', ()=> {
        expect(functions.subtract(7, 2)).toEqual(5);
    })
})