import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    let numero = Number(input('Informe um número menor que 1000: '))
    //let num = numero
    let [C,D,U] = separar_digitos(numero)

    
    mostrar_resultado(numero,C,D,U)
    
}
main()

function separar_digitos(numero){
    let C, D, U
    if(verificar_3_algarismos){
        U = numero % 10
        numero = Math.trunc(numero / 10)
        D = numero % 10
        numero = Math.trunc(numero / 10)
        C = numero % 10
    }else{
        D = numero % 10
        numero = Math.trunc(numero / 10)
        C = numero % 10
    }

    return [C,D,U]
}

function verificar_3_algarismos(numero){
    return (numero > 99 && numero < 1000)
}

function mostras_centenas(C){
    let centena
    if(C > 1){
        centena = "centenas"
    }else{
        centena = 'centena'
    }
    return centena
}
function mostras_dezenas(D){
    let dezena
    if(D > 1){
        dezena = "dezenas"
    }else{
        dezena = 'dezena'
    }
    return dezena
}
function mostras_unidades(U){
    let unidade
    if(U > 1){
        unidade = "unidades"
    }else{
        unidade = 'unidade'
    }
    return unidade
}

function mostrar_resultado(numero,C,D,U){
    if(verificar_3_algarismos(numero)){
        console.log(`${numero} = ${C} ${mostras_centenas(C)}, ${D} ${mostras_dezenas(D)} e ${U} ${mostras_unidades(U)}`)
    }else{
        console.log(`${D} ${mostras_dezenas(D)} e ${U} ${mostras_unidades(U)}`)
    }
}