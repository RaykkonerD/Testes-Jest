const StringUtils = require('./string_utils');

test('Inverter string "Banana"', () => {
    // Preparar
    let string = 'Banana';
    let inverter = new StringUtils();

    // Executar
    let resultado = inverter.reverse(string);

    // Verificar
	expect(resultado).toBe('ananaB'); 
	
});
test('Inverter string "Ch18Dl0$#@"', () => {
    // Preparar
    let string = 'Ch18Dl0$#@';
    let inverter = new StringUtils();

    // Executar
    let resultado = inverter.reverse(string);

    // Verificar
	expect(resultado).toBe('@#$0lD81hC'); 
});

test('Inverter string "OMISSÍSSIMO"', () => {
    // Preparar
    let string = 'OMISSÍSSIMO';
    let inverter = new StringUtils();

    // Executar
    let resultado = inverter.reverse(string);

    // Verificar
	expect(resultado).toBe('OMISSÍSSIMO'); 
	
});

// TODO: Fazer outros casos de teste que testem adequadamente a classe StringUtils