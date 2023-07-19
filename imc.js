class IndiceMassaCorporal {
    
    calcular(pesoEmKg, alturaEmCm) {
        if (pesoEmKg < 0.0) {
            throw new Error(`O valor do peso deve ser maior que zero: ${pesoEmKg.toFixed(2)}`);
        }
        if (alturaEmCm < 0) {
            throw new Error(`O valor da altura deve ser maior que zero: ${alturaEmCm}`);
        }

        let alturaEmM = alturaEmCm / 100.0;
        let resultado = pesoEmKg / (alturaEmM * alturaEmM);
        return this.getClassificacao(resultado.toFixed(1));
    }

    getClassificacao(imc) {
		  if (imc <= 18.4) {
  			return 'ABAIXO';
		  } else if (imc > 18.4 && imc < 25) {
  			return 'NORMAL';
		  } else if (imc >= 25 && imc < 30) {
  			return 'SOBREPESO';
		  } else if (imc >= 30 && imc < 35) {
  			return 'OBESIDADE_GRAU_I';
		  } else if (imc >= 35 && imc < 40) {
  			return 'OBESIDADE_GRAU_II';
		  } 
		
		  return 'OBESIDADE_GRAU_III';
    }

}

module.exports = IndiceMassaCorporal;