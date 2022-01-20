function somaDosNumeros(a, b) {
    if (!a || !b) console.log('Defina dois números!')
    const somaDosNumeros_1 = soma_1(a, b);
    const somaDosNumeros_2 = soma_2(a, b);
    return a + b

}

function soma_1(a, b) {
    if (a === b) {
        console.log(`Os números ${a} e ${b} são iguais.`)
    } else {
        console.log(`Os números ${a} e ${b} não são iguais.`)
    }
}

function soma_2(a, b) {
    const soma = a + b;
    let comparaDez = 'menor'
    let comparaVinte = 'menor'


    if (soma > 10) {
        comparaDez = 'maior'
    }
    if (soma >= 10) {
        comparaDez = 'maior ou igual'
    }

    if (soma > 20 || soma >= 20) {
        comparaVinte = 'maior'

    }
    if (soma >= 20) {
        comparaVinte = 'maior ou igual'
    }
    console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20`)

}
somaDosNumeros(12, 8)