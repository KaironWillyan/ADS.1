/*Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("Num: "))

    let quadrado = 0, cont = 0
    for(let i = 1; quadrado <= N; i++){
        quadrado = i **2 
        cont++
    }

    cont -= 1
    quadrado = (cont)**2
   

    console.log(`O maior quadrado menor que ${N} é ${quadrado} (quadrado de ${cont})`)


}  
main()