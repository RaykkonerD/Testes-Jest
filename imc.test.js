const IndiceMassaCorporal = require('./imc');


test('Calcular o IMC de classificação "ABAIXO"', () => {
    // Preparar
    const pesoEmKg = 45;
    const alturaEmCm = 172;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('ABAIXO');
});

test('Calcular o IMC de classificação "NORMAL"', () => {
    // Preparar
    const pesoEmKg = 70;
    const alturaEmCm = 175;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('NORMAL');
});

test('Calcular o IMC de classificação "SOBREPESO"', () => {
    // Preparar
    const pesoEmKg = 80;
    const alturaEmCm = 165;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('SOBREPESO');
});

test('Calcular o IMC de classificação "OBESIDADE_GRAU_I"', () => {
    // Preparar
    const pesoEmKg = 100;
    const alturaEmCm = 175;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('OBESIDADE_GRAU_I');
});

test('Calcular o IMC de classificação "OBESIDADE_GRAU_II"', () => {
    // Preparar
    const pesoEmKg = 110;
    const alturaEmCm = 170;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('OBESIDADE_GRAU_II');
});

test('Calcular o IMC de classificação "OBESIDADE_GRAU_III"', () => {
    // Preparar
    const pesoEmKg = 150;
    const alturaEmCm = 180;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar
    const resultado = imcCalculator.calcular(pesoEmKg, alturaEmCm);

    // Verificar
    expect(resultado).toBe('OBESIDADE_GRAU_III');
});

test('Lançar um erro ao passar peso negativo', () => {
    // Preparar
    const pesoEmKg = -60;
    const alturaEmCm = 170;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar e verificar o lançamento de um erro
    expect(() => imcCalculator.calcular(pesoEmKg, alturaEmCm)).toThrow(Error);
});

test('Lançar um erro ao passar altura negativa', () => {
    // Preparar
    const pesoEmKg = 70;
    const alturaEmCm = -165;
    const imcCalculator = new IndiceMassaCorporal();

    // Executar e verificar o lançamento de um erro
    expect(() => imcCalculator.calcular(pesoEmKg, alturaEmCm)).toThrow(Error);
});
