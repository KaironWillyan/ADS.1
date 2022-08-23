import fs from 'fs'
const lines = fs.readFileSync("q11_alunos.txt", 'utf-8')
const input = lines.split('\n')
/*11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. 
Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)
10
Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.*/

function main(){
    let  matricula, nota1, nota2, nota3
    let num_aprovados = 0, num_reprovados = 0, qtd_alunos = 0, media_final
    for(let i = 0; matricula != 0; i++){
        [matricula, nota1, nota2, nota3] = input[i].split(",").map(Number)
        media_final = (2 * nota1) + (3 * nota2) + (5 * nota3)

        if(media_final >= 7){
            num_aprovados++
        }else{
            num_reprovados++
        }

        qtd_alunos++
    }

    console.log(`Total de aprovados: ${num_aprovados}`)
    console.log(`Total de reprovados: ${num_reprovados}`)
    console.log(`Total de alunos ${qtd_alunos}`)
}
main()