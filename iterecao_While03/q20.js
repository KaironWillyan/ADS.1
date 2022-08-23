import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))

    let soma = 0
    let resultado = ``
    let j = 1
    while(j <= N){
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
        j++
    }

    console.log(resultado)
    console.log(`Soma = ${soma.toFixed(2)}`)

}
main()