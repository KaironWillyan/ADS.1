import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [num1, num2] = input("Digite dois números: ").split(" ").map(Number)
    const mmc = calcularMMC(num1, num2)
    console.log(mmc)
}
main()
function calcularMMC(A,B){
    let resto, x, y
      x = A
      y = B
      while(resto != 0){
        resto = x % y
        x = y
        y = resto
      }
      return (A * B) / x
}
