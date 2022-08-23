import { input } from "./io_utils.js"

function main(){
    const data = input("Informe uma data(dd/mm/aaaa) ").split("/").map(Number)
    const dia = data[0]
    const mes = data[1]
    const ano = data[2]

    const verificacao = verificar_se_data_e_valida(dia, mes, ano)

    function verificar_se_data_e_valida(a,b,c){
        if(a > 31 || b > 12 || c < 0){
            console.log("Não é válido!")
        }else{
            console.log("É uma data válida!")
        }
    }
}
main()