import fs from 'fs'
const input = fs.readFileSync('bee_1101_input.txt', 'utf8')
const lines = input.split('\n')

function main(){
    for(let i = 0; i < lines.length; i++){
        let [M, N] = lines[i].split(" ").map(Number).sort(ordem_crescente)
        
        if(M > 0 && N > 0){
            let  sequencia = sequencia_numeros(M, N)
            mostrar_sequencia(M, N)
        }
    }

}main()
function sequencia_numeros(M, N){
    let resultado = ``
    let sum = 0
    let sequencia


    for(let i = M; i <= N; i++){
        resultado += `${i} `
        sum += i
        sequencia = `${resultado}Sum=${sum}`
    }
    return sequencia

}

function mostrar_sequencia(M,N){
    let sequencia = sequencia_numeros(M, N)
    if((M > 0) && (N > 0)){
        console.log(sequencia)
    }
}

function ordem_crescente(a,b){
    return a - b
}

