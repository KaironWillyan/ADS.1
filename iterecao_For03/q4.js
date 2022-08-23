import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [A, limite, R] = input("Informe o valor inicial, final e razão: ").split(" ").map(Number)
    for(let i = A; i < limite; i *= R){
        console.log(`${i} `)
    }
}
main()