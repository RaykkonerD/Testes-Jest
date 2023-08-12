const TemperatureConverter = require('./temperature');

test('Converter de Fahrenheit para Celsius', () => {
    // Preparar
    let temperatura = 51.3;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.fahrenheitToCelsius(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(10.72, 2); // Precisão de 2 casas decimais
});

test('Converter de Fahrenheit para Kelvin', () => {
    // Preparar
    let temperatura = 95;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.fahrenheitToKelvin(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(308.15, 2); // Precisão de 2 casas decimais
});

test('Converter de Celsius para Fahrenheit', () => {
    // Preparar
    let temperatura = 8.4;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.celsiusToFahrenheit(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(47.12, 2); // Precisão de 2 casas decimais
}); 

test('Converter de Celsius para Kelvin', () => {
    // Preparar
    let temperatura = 87.63;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.celsiusToKelvin(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(360.78, 2); // Precisão de 2 casas decimais
});
 

test('Converter de Kelvin para Celsius', () => {
    // Preparar
    let temperatura = 43.5;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.kelvinToCelsius(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(-229.65, 2); // Precisão de 2 casas decimais
});

test('Converter de Kelvin para Fahrenheit', () => {
    // Preparar
    let temperatura = 76.6;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.kelvinToFahrenheit(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(-321.79, 2); // Precisão de 2 casas decimais
});

// TODO: Fazer outros casos de teste que testem adequadamente a classe TemperatureConverter
