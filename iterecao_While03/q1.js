import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("num: "))
    let i = 1
    while(i < num){
        console.log(`${i}`)

        i++
    }
    
}
main()