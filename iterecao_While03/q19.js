import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("num: "))

    let j = 1
    let soma = 0
    let resultado = ``

    let i = N
    while(i >= N){
        soma += j / i 
        resultado += `${j}/${i}`
        j++
        i--
        if(i > 0){
            resultado += ` - ${i}/${j} + `
            soma -= i / j
        }
    }

    console.log(resultado)
    console.log(`Soma = ${soma.toFixed(2)}`)
    //  (j / n) -  ((n-1)/ j+1) +  (j+2 / (n - 2)) +/- ... N / 1
}
main()