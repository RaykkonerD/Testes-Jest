class StringUtils {

    reverse(valor) {

        if (valor == null || valor.trim() == '') {
            throw new Error('A string deve ser diferente de nula e não vazia!');
        }

        let reverso = '';

        for(let c of valor) {
            reverso = c + reverso;
        }

        return reverso;
    }

}

module.exports = StringUtils;