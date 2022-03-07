const sum = require("./script");

describe("The sum function", () => {
  it("adds 4 + 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Error launch test when not number", () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it("Expect error message when not number", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});
