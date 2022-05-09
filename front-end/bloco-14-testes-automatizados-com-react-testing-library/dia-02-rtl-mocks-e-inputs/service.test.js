const services = require('./service');

afterEach(() => {
  jest.clearAllMocks();
})

test("1 - Testa a função 'randomNumber'", () => {
  services.randomNumber = jest.fn().mockReturnValue(10);

  expect(services.randomNumber()).toBe(10);
  expect(services.randomNumber).toHaveBeenCalled();
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
})

test("2 - Testa divisao", () => {
  services.randomNumber.mockImplementation((a, b) => a / b);
  services.randomNumber(8, 4);

  expect(services.randomNumber).toHaveBeenCalled();
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber).toHaveBeenCalledWith(8, 4);
  expect(services.randomNumber(8, 4)).toBe(2);
})

test("3 - Testa multiplicação", () => {
  services.randomNumber.mockImplementation((a, b, c) => a * b * c);
  services.randomNumber(8, 2, 2);

  expect(services.randomNumber).toHaveBeenCalled();
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber).toHaveBeenCalledWith(8, 2, 2);
  expect(services.randomNumber(8, 2, 2)).toBe(32);
})

test("3 - reseta implementação; retorna o dobro do param", () => {
  expect(services.randomNumber).not.toHaveBeenCalled();

  services.randomNumber.mockImplementation((a) => a * 2);
  services.randomNumber(4);
  
  expect(services.randomNumber).toHaveBeenCalled();
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber).toHaveBeenCalledWith(4);
  expect(services.randomNumber(4)).toBe(8);
})

describe("Exercício 4", () => {
  it("Mockando função para retornar em caixa baixa", () => {
    const STR = 'VAMO QUE VAMO';

    const mockToLowerCase = jest
      .spyOn(services, 'transformToUpperCase')
      .mockImplementation((str) => str.toLowerCase());
   
    expect(mockToLowerCase(STR)).toBe('vamo que vamo');
    expect(services.transformToUpperCase).toHaveBeenCalled();
    expect(services.transformToUpperCase).toHaveBeenCalledWith(STR);
  })

  it("Mockando função para retornar ultima letra", () => {
    const STR = 'trybe';

    const mockLastLetter = jest
      .spyOn(services, 'stringFirstLetter')
      .mockImplementation((a) => a.charAt(a.length - 1));

    expect(mockLastLetter(STR)).toBe('e');
    expect(services.stringFirstLetter).toHaveBeenCalledTimes(1);
    expect(services.stringFirstLetter).toHaveBeenCalledWith(STR);
  })

  it("Mockando função para retornar concat de 3 strings", () => {

    const mockConcat = jest
      .spyOn(services, 'concatStrings')
      .mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    
    expect(mockConcat('vamo', ' que ', 'vamo'))
      .toBe('vamo que vamo');
    expect(services.concatStrings).toHaveBeenCalledTimes(1);
    expect(services.concatStrings)
      .toHaveBeenCalledWith('vamo', ' que ', 'vamo');
  })

  it("Restaura e verifica os retornos", () => {
    services.transformToUpperCase.mockRestore();
    services.stringFirstLetter.mockRestore();
    services.concatStrings.mockRestore();

    expect(services.transformToUpperCase('teste'))
      .toBe('TESTE');
    expect(services.stringFirstLetter('teste'))
      .toBe('t');
    expect(services.concatStrings('tes', 'te'))
      .toBe('teste');
  })
})
