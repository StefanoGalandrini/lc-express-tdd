const {test, expect} = require("@jest/globals");
const dbRead = require("./dbRead");

jest.mock('fs', () => ({
  readFileSync: () => '[{"name": "mario", "surname": "rossi", "email": "mario.rossi@gmail.com"}]'
}));

test("Dovrebbe leggere dei dati dal file users.json e ritornare un oggetto", () => {
  const result = dbRead();

  expect(result).toEqual([{
    name: "mario",
    surname: "rossi",
    email: "mario.rossi@gmail.com"
  }])
}) 