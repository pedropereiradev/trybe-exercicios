const { sum, myRemove, myFizzBuzz } = require("./script");

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

describe('The myRemove function', () => {
  it("Check myRemove([1, 2, 3, 4], 3) call return the expected array", () => {
    const myRemoveArray = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Check myREmove([1, 2, 3, 4], 3) not return [1, 2, 3, 4]', () => {
    const myRemoveArray = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toEqual(myRemove[1, 2, 3, 4], 3);
  });

  it("Check myRemove([1, 2, 3, 4], 5) call return the expected array", () => {
    const myRemoveArray = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});

describe('The myFizzBuzz function', () => {
  
});
