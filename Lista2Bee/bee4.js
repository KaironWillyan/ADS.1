import { input } from "./io_utils.js"

function main(){
    const numeros = input()
    const [codigo, quantidade] = numeros.split(" ").map(Number)
    let total

    if(codigo == 1){
        total = quantidade * 4.0
    }else if(codigo == 2){
        total = quantidade * 4.5
    }else if(codigo == 3){
        total = quantidade * 5.0
    }else if(codigo == 4){
        total = quantidade * 2.0
    }else if(codigo == 5){
        total = quantidade * 1.5
    }

    console.log(`Total: R$ ${total.toFixed(2)}`)

}
main()
