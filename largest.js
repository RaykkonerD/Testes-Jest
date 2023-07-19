class Largest {
    
    getMaior(numeros) {

        if (numeros == null || numeros.length == 0) {
            throw new Error('Parâmetro inválido! Deve ser um array de inteiros com pelo menos um valor!');
        }

        let maior = null;

        for(let n of numeros) {
            if (maior == null || n > maior) {
                maior = n;
            }
        }

        return maior;
    }

}

module.exports = Largest;