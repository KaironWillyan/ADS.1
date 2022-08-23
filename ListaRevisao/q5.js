import prompt from 'prompt-sync'
const input = prompt({ sigint: false })

function main() {
    const [valores] = input("Informe o valor de 3 produtos: ").split(" ").map(Number).sort(ordem_crescente)
    const mais_barato = valores
    console.log(`O produto mais barato é o de R$ ${mais_barato}`)


}
main()

function ordem_crescente(a, b) {
    return a - b
}