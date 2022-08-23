import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let resultado = ``
    let soma = 0
    for(let i = 1, j = 1; i <= 99 && j <= 50; i+=2, j++){
        resultado += `${i} / ${j} `
        soma += i / j

        if( i < 99 && j < 50){
            resultado += `  +  `
        }
    }

    console.log(resultado)
    console.log(`Soma: ${soma}`)
}
main()