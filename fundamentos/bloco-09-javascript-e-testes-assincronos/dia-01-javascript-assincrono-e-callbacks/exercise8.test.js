// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8.js');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectError = new Error('Não temos esse pokémon para você :(');
    
    function callback(err, result) {
      expect(err).toEqual(expectError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charizardl', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(err, result) {
      expect(result).toBe(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});
