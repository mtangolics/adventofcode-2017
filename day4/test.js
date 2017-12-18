const { passIsValid } = require('./index');

test('aa bb cc dd ee is valid', () => {
    expect(passIsValid('aa bb cc dd ee')).toEqual(true);
});

test('aa bb cc dd aa is not valid', () => {
    expect(passIsValid('aa bb cc dd aa')).toEqual(false);
});

test('aa bb cc dd aaa is valid', () => {
    expect(passIsValid('aa bb cc dd aaa')).toEqual(true);
});