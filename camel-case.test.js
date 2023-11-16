test('camelCase function should convert string to camel case', () => {
  const str = 'hello world';
  const expected = 'helloWorld';
  const result = camelCase(str);
  expect(result).toBe(expected);
});

test('camelCase function should handle empty string', () => {
  const str = '';
  const expected = '';
  const result = camelCase(str);
  expect(result).toBe(expected);
});

test('camelCase function should handle single word string', () => {
  const str = 'hello';
  const expected = 'hello';
  const result = camelCase(str);
  expect(result).toBe(expected);
});

test('camelCase function should handle string with leading/trailing spaces', () => {
  const str = '  hello world  ';
  const expected = 'helloWorld';
  const result = camelCase(str);
  expect(result).toBe(expected);
});

test('camelCase function should handle string with special characters', () => {
  const str = 'hello-world';
  const expected = 'helloWorld';
  const result = camelCase(str);
  expect(result).toBe(expected);
});
