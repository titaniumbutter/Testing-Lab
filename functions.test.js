const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions')
const { expect, test, describe } = require('@jest/globals')

test('This should return the value of 2', function () {
    expect(returnTwo()).toBe(2);
});

test('This function should return the name after the word hello', function () {
    expect(greeting('Israel')).toEqual('Hello, Israel')
});

test('add function should add two number', function(){
    expect(add(5,6)).toBe(11);
});

describe('Math Function', function() {
    test('The multiply function should multiply 2 numbers with each other', function () {
        expect(multiply(2,5)).toEqual(10)
    });

    test('The divide function should divide 2 numbers by each other', function () {
        expect(divide(10,5)).toEqual(2);
    });

    test('The subtract function should subtact the first number by the second one', function () {
        expect(subtract(10,5)).toEqual(5);
    });
})
