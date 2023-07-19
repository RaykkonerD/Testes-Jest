const Triangulo = require('./triangulo');

//EQUILÁTERO
test("Triângulo EQUILÁTERO", () => {
  let resultado = new Triangulo(5, 5, 5).getClassificacão();
	
  expect(resultado).toBe("EQUILÁTERO");
})


//ISÓSCELES (permutação 1)
test("Triângulo ISÓSCELES (permutação 1)", () => {
  let resultado = new Triangulo(5, 4, 5).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})

//ISÓSCELES (permutação 2)
test("Triângulo ISÓSCELES (permutação 2)", () => {
  let resultado = new Triangulo(4, 5, 5).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})

//ISÓSCELES (permutação 3)
test("Triângulo ISÓSCELES (permutação 3)", () => {
  let resultado = new Triangulo(5, 5, 4).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})

//ISÓSCELES 2 (permutação 1)
test("Triângulo ISÓSCELES 2 (permutação 1)", () => {
  let resultado = new Triangulo(6, 5, 5).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})

//ISÓSCELES 2 (permutação 2)
test("Triângulo ISÓSCELES 2 (permutação 2)", () => {
  let resultado = new Triangulo(5, 6, 5).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})

//ISÓSCELES 2 (permutação 3)
test("Triângulo ISÓSCELES 2 (permutação 3)", () => {
  let resultado = new Triangulo(5, 5, 6).getClassificacão();
	
  expect(resultado).toBe("ISÓSCELES");
})


//ESCALENO
test("Triângulo ESCALENO", () => {
  let resultado = new Triangulo(6, 5, 3).getClassificacão();
	
  expect(resultado).toBe("ESCALENO");
})


//INVÁLIDO
test("Triângulo INVÁLIDO", () => {
  let resultado = new Triangulo(0, 0, 0).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO (permutação 1)
test("Triângulo INVÁLIDO (permutação 1)", () => {
  let resultado = new Triangulo(30, 2, 1).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO (permutação 2)
test("Triângulo INVÁLIDO (permutação 2)", () => {
  let resultado = new Triangulo(2, 30, 1).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO (permutação 3)
test("Triângulo INVÁLIDO (permutação 3)", () => {
  let resultado = new Triangulo(1, 2, 30).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO 2 (permutação 1)
test("Triângulo INVÁLIDO 2 (permutação 1)", () => {
  let resultado = new Triangulo(0, 15, 15).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO 2 (permutação 2)
test("Triângulo INVÁLIDO 2 (permutação 2)", () => {
  let resultado = new Triangulo(15, 15, 0).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})

//INVÁLIDO 2 (permutação 3)
test("Triângulo INVÁLIDO 2 (permutação 3)", () => {
  let resultado = new Triangulo(15, 0, 15).getClassificacão();
	
  expect(resultado).toBe("INVÁLIDO");
})