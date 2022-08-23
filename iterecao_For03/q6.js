import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tabuada = Number(input("Tabuada: "))
    let resultado
    for(let i = 1; i <= 10; i++){
        let resultado = tabuada * i
        console.log(`${tabuada} x ${i} = ${resultado}` )
    }
}
main()