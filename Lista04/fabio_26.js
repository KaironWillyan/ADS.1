import { input } from "./io_utils.js"

function main(){
    const lados = input("Informe os 3 lados do triângulo: ").split(" ").map(Number).sort(ordenar)
    console.log(lados)
   const hipotenusa = lados[2], cateto1 = lados[1], cateto2 = lados[0]

   console.log(`Hipotenusa: ${hipotenusa}, catetos: ${cateto1} e ${cateto2}`)

    function ordenar(a,b){
        return a - b
    }
}
main()