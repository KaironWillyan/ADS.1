import fs from 'fs'
const input = fs.readFileSync('bee_1114_input.txt', 'utf-8')
const lines = input.split('\n')

function main(){

    let senha = 0, mensagem, cont = 0

    do{
        senha = Number(lines[cont])
        mensagem = mostrar_verificacao(senha)
        console.log(mensagem)
        cont++
    }while(senha != 2002)

}
main()

function mostrar_verificacao(senha){
    let mensagem
    if(senha == 2002){
        mensagem = "Acesso Permitido"
    }else{
        mensagem = "Senha Invalida"
    }
    return mensagem
}