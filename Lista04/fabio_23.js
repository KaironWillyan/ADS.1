import { input } from "./io_utils.js"

function main(){
    const data1 = input("Informe uma data (dd/mm/aaaa): ").split("/").map(Number)
    const data2 = input("Informe uma data (dd/mm/aaaa): ").split("/").map(Number)

    const data_maisRecente = data_mais_recente(data1,data2)
    console.log(data_maisRecente)


    function data_mais_recente(data1,data2){
        const [dia1,mes1,ano1] = data1
        const [dia2,mes2,ano2] = data2
        
        let data_recente

        if(dia1>dia2){
            data_recente = data1
        }else if(dia1<dia2){
            data_recente = data2
        }
        if(mes1>mes2){
            data_recente = data1
        }else if(mes1<mes2){
            data_recente = data2
        }
        if(ano1>ano2){
            data_recente = data1
        }else if(ano1<ano2){
            data_recente = data2
        }
        return data_recente
        
    }

}
main()