const Largest = require('./largest');

test('Números naturais (em ordem)', () => {
    // Preparar
    let numeros = [1, 76, 92, 125, 156, 230, 314, 451, 823, 900];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(900); 
});

test('Números naturais (fora de ordem)', () => {
    // Preparar
    let numeros = [10, 788, 2, 356, 14, 0, 123, 7, 99, 1];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(788); 
});

test('Números inteiros (em ordem)', () => {
    // Preparar
    let numeros = [-2345, -123, -97, -45, -21, -16, -9, -4, -1, 0];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(0); 
});

test('Números inteiros (fora de ordem)', () => {
    // Preparar
    let numeros = [-43, -1238, -871, -45, -22, -9, -3, -4, -167, -16];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(-3); 
});

test('Números reais (em ordem)', () => {
    // Preparar
    let numeros = [-5.6, -4, -3, -2, -1.3, 0, 1.9, 2.2, 3.0, 4.1, 5.5];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(5.5); 
});

test('Números reais (fora de ordem)', () => {
    // Preparar
    let numeros = [-8.1, -4, 87.7001, 15, 0, 1.9, 2.276, 66, 87.7, 1];
    let maior = new Largest();

    // Executar
    let resultado = maior.getMaior(numeros);

    // Verificar
	  expect(resultado).toBe(87.7001); 
});
