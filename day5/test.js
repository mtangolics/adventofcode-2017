const { executeSteps, executeStepsPart2 } = require('./index');

test('executeSteps is a function', () => {
    expect(typeof executeSteps).toEqual('function');
});

test('executeStepsPart2 is a function', () => {
    expect(typeof executeStepsPart2).toEqual('function');
});

test('executeSteps [0 3 0 1 -3] produces 5', () => {
    expect(executeSteps('0\n3\n0\n1\n-3')).toEqual(5);
});

test('executeStepsPart2 [0 3 0 1 -3] produces 10', () => {
    expect(executeStepsPart2('0\n3\n0\n1\n-3')).toEqual(10);
});