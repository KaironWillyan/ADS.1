import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tabuada = Number(input("Tabuada: "))
    let resultado

    let i = 1
    while(9 <= 10){
        resultado = tabuada * i
        console.log(`${tabuada} x ${i} = ${resultado}` )
        i++
    }

}
main()