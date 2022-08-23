function main() {
    let array_par = new Array()
    let cont_par = 0
    let array_impar = new Array()
    let cont_impar = 0

    for (let i = 0; i < lines.length -1; i++) {
        if (eh_par(lines[i])) {
            array_par[cont_par] = lines[i]
            cont_par++
            if (array_par.length === 5) {
                mostrar_vetor_com_palavra_estatica(array_par, "par")
                array_par = new Array()
                cont_par = 0
            }

        } else {
            array_impar[cont_impar] = lines[i]
            cont_impar++
            if (array_impar.length == 5) {
                mostrar_vetor_com_palavra_estatica(array_impar, "impar")
                array_impar = new Array()
                cont_impar = 0
            }
        }
    }

    mostrar_vetor_com_palavra_estatica(array_impar, "impar")
    mostrar_vetor_com_palavra_estatica(array_par, "par")
}

function eh_par(n) {
    return n % 2 === 0
}

function mostrar_vetor_com_palavra_estatica(vetor, palavra) {
    for (let i = 0; i < vetor.length; i++) {
        console.log(`${palavra}[${i}] = ${vetor[i]}`)
    }
}
main()
