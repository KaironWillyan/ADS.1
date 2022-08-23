import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))

    let soma = 0
    let resultado = ``

    for(let j = 1; j <= N; j++){

        soma += 1 / j
        resultado += `1/${j}`

        j++
       if(j<=N){
           resultado += ` - 1/${j} `
           soma -= 1 / j
       }
        if(j < N){
            resultado += ` + `
        }

    }

    console.log(resultado)
    console.log(`Soma = ${soma.toFixed(2)}`)

}
main()