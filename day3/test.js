const { getSteps } = require('./index');

test('getSteps is a function', () => {
    expect(typeof getSteps).toEqual('function');
});

test('getSteps(1) takes 0 steps', () => {
    expect(getSteps(1)).toEqual(0);
});

test('getSteps(12) takes 3 steps', () => {
    expect(getSteps(12)).toEqual(3);
});