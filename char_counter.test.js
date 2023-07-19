const { CharacterCounter, IllegalArgumentError } = require('./char_counter');

test('Contar o número de ocorrências de um caractere na frase', () => {
    // Preparar
    const frase = "Hello, world!";
    const caractere = "o";
    const characterCounter = new CharacterCounter();

    // Executar
    const resultado = characterCounter.contar(frase, caractere);

    // Verificar
    expect(resultado).toBe(2);
});

test('Lançar um erro ao passar uma frase nula', () => {
    // Preparar
    const frase = null;
    const caractere = "o";
    const characterCounter = new CharacterCounter();

    // Executar e verificar o lançamento de um erro
    expect(() => characterCounter.contar(frase, caractere)).toThrow(IllegalArgumentError);
});

test('Lançar um erro ao passar uma frase vazia', () => {
    // Preparar
    const frase = "";
    const caractere = "o";
    const characterCounter = new CharacterCounter();

    // Executar e verificar o lançamento de um erro
    expect(() => characterCounter.contar(frase, caractere)).toThrow(IllegalArgumentError);
});

test('Lançar um erro ao passar um caractere nulo', () => {
    // Preparar
    const frase = "Hello, world!";
    const caractere = null;
    const characterCounter = new CharacterCounter();

    // Executar e verificar o lançamento de um erro
    expect(() => characterCounter.contar(frase, caractere)).toThrow(IllegalArgumentError);
});
