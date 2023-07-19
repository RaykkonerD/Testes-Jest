class Triangulo {

  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  getClassificacão() {
    // TODO:
   	let [a, b, c] = [this.lado1, this.lado2, this.lado3];

		if ((a+b) <= c || (a+c) <= b || (b+c) <= a){
		  return "INVÁLIDO";
	 } else {
      if (a == b && b == c){
			   return "EQUILÁTERO";
		  } else if(a == b || a == c || b == c){
			  return "ISÓSCELES";
		  } else {
			  return "ESCALENO";
		  }
 	 }
    
  }
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('### Classificador de Triângulo ###');
  rl.question('Informe os 3 lados do triângulo separados por vírgula? ', (lados) => {
    let [lado1, lado2, lado3] = lados
      .split(',')
      .map((lado) => parseFloat(lado.trim()));
    let triangulo = new Triangulo(lado1, lado2, lado3);
    let classificacao = triangulo.getClassificacão();
    console.log(classificacao);
    rl.close();
  });
}

module.exports = Triangulo;