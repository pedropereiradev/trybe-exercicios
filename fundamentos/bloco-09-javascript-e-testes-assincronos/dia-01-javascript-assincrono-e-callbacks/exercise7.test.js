const uppercase = require('./exercise7.js');

describe('The uppercase function', () => {
  it('Retorna a string em letras maiúsculas', (done) => {
    const expectedString = 'OLA TRYBERS! #VQV';
    const inputString = 'ola trybers! #vqv';

    uppercase(inputString, (str) => {
      try {
        expect(str).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    })
    
  })
})