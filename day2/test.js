const { checksum1, checksum2, diffRow, divRow } = require('./index');

test('checksum1 function exists', () => {
  expect(typeof checksum1).toEqual('function');
});

test('checksum2 function exists', () => {
  expect(typeof checksum2).toEqual('function');
});

test('diffRow function exist', () => {
  expect(typeof diffRow).toEqual('function');
});

test('divRow function exist', () => {
  expect(typeof divRow).toEqual('function');
});

test('diffRow(5 1 9 5) produces 8', () => {
  expect(diffRow('5 1 9 5')).toEqual(8);
});

test('diffRow(7 5 3) produces 4', () => {
  expect(diffRow('7 5 3')).toEqual(4);
});

test('diffRow(2 4 6 8) produces 6', () => {
  expect(diffRow('2 4 6 8')).toEqual(6);
});

test('divRow(5 9 2 8) produces 4', () => {
  expect(divRow('5 9 2 8')).toEqual(4);
});

test('divRow(9 4 7 3) produces 3', () => {
  expect(divRow('9 4 7 3')).toEqual(3);
});

test('divRow(3 8 6 5) produces 2', () => {
  expect(divRow('3 8 6 5')).toEqual(2);
});

test('5 1 9 5\n7 5 3\n2 4 6 8 produces 18', () => {
  expect(checksum1('5 1 9 5\n7 5 3\n2 4 6 8')).toEqual(18);
});

test('5 9 2 8\n9 4 7 3\n3 8 6 5 produces 9', () => {
  expect(checksum2('5 9 2 8\n9 4 7 3\n3 8 6 5')).toEqual(9);
});

