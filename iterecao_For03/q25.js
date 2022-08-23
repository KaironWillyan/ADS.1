import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const N = Number(input("Nº de eleitores: "))
    let voto, kaike = 0, joao = 0, romero = 0, nulo = 0, branco = 0, Vencedor

    for(let i = 1; i <= N; i++){
        voto = Number(input("Vote 1 para Kaike, 2 para João, 3 para Romero, 9 para Nulo e 0 para votar Branco"))

    voto == 1? kaike++ : kaike
    voto == 2? joao++ :  joao
    voto == 3? romero++ :  romero
    voto == 9? nulo++ :  nulo
    voto == 0? branco++ :  branco

    Vencedor = pegar_vencedor(kaike, joao, romero)

    }
    
    console.log(`Votos Kaike: ${kaike}`)    
    console.log(`Votos João: ${joao}`)    
    console.log(`Votos Romero: ${romero}`)    
    console.log(`Votos nulo: ${nulo}`)    
    console.log(`Votos branco ${branco}`)    
    console.log(`Vencedor: ${Vencedor}`)    
}
main()

function pegar_vencedor(a,b,c){
    let Vencedor
    a > b && a > c? Vencedor = 'Kaike' : b > a && b > c? Vencedor = 'João' : Vencedor = 'Romero'

    return Vencedor
}