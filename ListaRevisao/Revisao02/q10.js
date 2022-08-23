import  prompt  from "prompt-sync"
const input = prompt({sigint:false})

function main(){
    const notas = input("Informe as 4 notas semestrais do aluno: ").split(" ").map(Number)
    const [n1,n2,n3,n4] = notas
    const media = (n1 + n2 + n3 + n4)/4
    let conceito 
    switch (true){
        case media >= 9:
            conceito = "A"
            break
        case media >= 7.5 && media < 9:
            conceito = "B"
            break
        case media >= 6.5 && media < 7.5:
            conceito = "C"
            break
        case media >= 4 && media < 6.5:
            conceito = "D"
            break
        case media < 4:
            conceito = "E"
            break

    }

    console.log(`Média de aprovamento  Conceito \n ${media.toFixed(2)}                  ${conceito}`)


}
main()