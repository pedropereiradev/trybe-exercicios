const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
} = require("./script");

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
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Check myREmove([1, 2, 3, 4], 3) not return [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove[1, 2, 3, 4], 3);
  });

  it("Check myRemove([1, 2, 3, 4], 5) call return the expected array", () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});

describe('The myFizzBuzz function', () => {
  it('Check 15 return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it("Check 21 return fizz", () => {
    expect(myFizzBuzz(21)).toBe("fizz");
  });

  it("Check 20 return fizz", () => {
    expect(myFizzBuzz(20)).toBe("buzz");
  });

  it('Check 4 return 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('Check "fizz" return false', () => {
    expect(myFizzBuzz('fizz')).toBeFalsy();
  });
});

describe('The encode function', () => {
  it('Check encode function exists', () => {
    expect(typeof encode).toBe('function');
  });
  it('Expect vogals be encoded to numbers', () => {
    expect(encode('Hello World!')).toBe('H2ll4 W4rld!');
    expect(encode("What are you doing now?")).toBe("Wh1t 1r2 y45 d43ng n4w?");
  });
});

describe("The decode function", () => {
  it("Check decode function exists", () => {
    expect(typeof decode).toBe("function");
  });
  it('Expect numbers to be decoded to vogals', () => {
    expect(decode("H2ll4 W4rld!")).toBe("Hello World!");
    expect(decode("Wh1t 1r2 y45 d43ng n4w?")).toBe("What are you doing now?");
  });
});

describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

describe("Testa a função hydrate", () => {
  it("Testa se a função hydrate é definida", () => {
    expect(hydrate).toBeDefined();
  });
  it("Testa se hydrate é uma função", () => {
    expect(typeof hydrate).toBe("function");
  });
  it("Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber", () => {
    expect(hydrate("1 cerveja")).toBe("1 copo de água");
    expect(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")).toBe(
      "7 copos de água"
    );
    expect(hydrate("2 shots de tequila, 2 cervejas e 1 corote")).toBe(
      "5 copos de água"
    );
    expect(hydrate("1 copo de catuaba, 1 cervejas e 1 copo de vinho")).toBe(
      "3 copos de água"
    );
    expect(hydrate("4 caipirinhas e 2 cervejas")).toBe("6 copos de água");
  });
});

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Search ID and Info', () => {
    expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs');
    expect(searchEmployee("5569-4", "specialities")).toEqual([
      "Frontend",
      "Redux",
      "React",
      "CSS",
    ]);
    expect(searchEmployee("9852-2-2", "firstName")).toEqual("Jeff");


  })
})