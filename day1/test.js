const { captcha, captchaPart2 } = require('./index');

test('captcha function exists', () => {
  expect(typeof captcha).toEqual('function');
});

test('1122 produces 3', () => {
  expect(captcha(1122)).toEqual(3);
});

test('1111 produces 4', () => {
  expect(captcha(1111)).toEqual(4);
});

test('1234 produces 0', () => {
  expect(captcha(1234)).toEqual(0);
});

test('91212129 produces 9', () => {
  expect(captcha(91212129)).toEqual(9);
});

test('captchaPart2 function exists', () => {
  expect(typeof captchaPart2).toEqual('function');
});

test('1212 produces 6', () => {
  expect(captchaPart2(1212)).toEqual(6);
});

test('1221 produces 0', () => {
  expect(captchaPart2(1221)).toEqual(0);
});

test('123425 produces 4', () => {
  expect(captchaPart2(123425)).toEqual(4);
});

test('123123 produces 12', () => {
  expect(captchaPart2(123123)).toEqual(12);
});