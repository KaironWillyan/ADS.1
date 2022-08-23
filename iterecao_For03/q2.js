import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const num = Number(input("num: "))

    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            console.log(`${i}`)  
        } 
    }
}
main()