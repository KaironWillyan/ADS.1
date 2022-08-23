import prompt from 'prompt-sync'
const input = prompt()


function main(){
    const qtd_de_bois = Number(input("qtd de bois?: "))
    let  id, nome, peso = 0

    let id_mais_gordo, nome_mais_gordo, peso_mais_gordo = 0, id_mais_magro, nome_mais_magro, peso_mais_magro = 0

    let i = 1
    while(i <= qtd_de_bois){
        [id, nome] = input(`Informe o ID e o nome do ${i} boi: `).split(" ")
        peso = Number(input("Quantos kg o boi pesa? "))

        if(i == 1){
            peso_mais_gordo = peso
            nome_mais_gordo = nome
            id_mais_gordo = id

            peso_mais_magro = peso
            nome_mais_magro = nome
            id_mais_magro = id
        }else{

            if(peso > peso_mais_gordo){
                peso_mais_gordo = peso
                nome_mais_gordo = nome
                id_mais_gordo = id
            }
            if(peso < peso_mais_magro){
                peso_mais_magro = peso
                nome_mais_magro = nome
                id_mais_magro = id
            }
        }
        i++
    }
    console.log(`Boi mais gordo: ${nome_mais_gordo} id: ${id_mais_gordo} peso: ${peso_mais_gordo} kg`)
    console.log(`Boi mais magro: ${nome_mais_magro} id: ${id_mais_magro} peso: ${peso_mais_magro} kg`)
}
main()