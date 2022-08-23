import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [A, limite, R] = input("Informe o valor inicial, final e razão: ").split(" ").map(Number)
    let i = A
    while(i < limite){
        console.log(`${i} `)
        i *= R
    }

}
main()