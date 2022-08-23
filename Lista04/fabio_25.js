import { input } from "./io_utils.js"

function main(){
    let senha
    do{
        senha =  Number(input("Digite a senha: "))
    }while(senha != 1234)

    console.log("Acesso Liberado!")
}
main()