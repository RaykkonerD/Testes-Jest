class CharacterCounter {

    contar(frase, caractere) {
        if (frase == null || frase.trim() == '') {
            throw new IllegalArgumentError('A frase deve ser diferente de nulo e não vazia!');
        } else if(caractere == null || caractere == ''){
            throw new IllegalArgumentError('O caracter deve ser diferente de nulo e não vazio!');
        }

        let cont = 0;
        for (let c of frase) {
            if (c == caractere) {
				      cont++;
    			  }
        }

        return cont;
    }

}

class IllegalArgumentError extends Error {
  constructor(message) {
    super(message);
  }
}

class RequiredError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = {CharacterCounter, IllegalArgumentError, RequiredError};