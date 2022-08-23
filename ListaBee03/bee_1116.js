import fs from 'fs'
const input = fs.readFileSync('bee_1116_input.txt', 'utf-8')
const lines = input.split("\n")


function main(){
    const repeticoes = Number(lines[0])
    let num1, num2, media
    for(let i = 1; i <= repeticoes; i++){
        [num1, num2] = lines[i].split(" ").map(Number)
        if(!(verificarSeEhValida(num2))){
            media = num1 / num2
            console.log(media.toFixed(1))
        }else{
            console.log("divisao impossivel")
        }
    }
}
main()

function verificarSeEhValida(denominador){
    return denominador === 0
}

