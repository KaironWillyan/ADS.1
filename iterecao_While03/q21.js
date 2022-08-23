import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let resultado = ``
    let soma = 0
    let i = 1, j = 1
    while( i <= 99 && j <= 50){
        resultado += `${i} / ${j} `
        soma += i / j

        if( i < 99 && j < 50){
            resultado += `  +  `
        }
        i+=2, j++
    }

    console.log(resultado)
    console.log(`Soma: ${soma}`)
}
main()