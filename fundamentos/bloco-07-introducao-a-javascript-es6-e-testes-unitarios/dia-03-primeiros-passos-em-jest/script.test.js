const sum = require('./script');

describe("The sum function", () => {
  it("adds 4 + 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  it("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});