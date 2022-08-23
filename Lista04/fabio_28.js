import { input } from "./io_utils.js"

function main(){
    const coordenadas = input("Infomrme as coordenadas de dois cantos do retângulo no plano cartesiano(x1,y1;x2,y2): ").split(" ").map(Number)
    const x1 = Math.abs(coordenadas[0])
    const y1 = Math.abs(coordenadas[1])
    const x2 = Math.abs(coordenadas[2])
    const y2 = Math.abs(coordenadas[3])

    const area = (x1 + x2) * (y1 + y2 )

    console.log(area)
}
main()