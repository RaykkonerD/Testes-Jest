const FizzBuzz = require('./fizzbuzz');

test('Múltiplo de 3', () => {
    // Preparar
    let valor = 21;
    let fizzBuzz = new FizzBuzz();

    // Executar
    let resultado = fizzBuzz.calculate(valor);

    // Verificar
    expect(resultado).toBe('Fizz');
});

test('Múltiplo de 5', () => {
    // Preparar
    let valor = 50;
    let fizzBuzz = new FizzBuzz();

    // Executar
    let resultado = fizzBuzz.calculate(valor);

    // Verificar
    expect(resultado).toBe('Buzz');
});

test('Múltiplo de 3 e 5', () => {
    // Preparar
    let valor = 45;
    let fizzBuzz = new FizzBuzz();

    // Executar
    let resultado = fizzBuzz.calculate(valor);

    // Verificar
    expect(resultado).toBe('FizzBuzz');
});

test('Não-múltiplo nem de 3 de 5', () => {
    // Preparar
    let valor = 2;
    let fizzBuzz = new FizzBuzz();

    // Executar
    let resultado = fizzBuzz.calculate(valor);

    // Verificar
    expect(resultado).toBe("2");
});
