import {input} from "./io_utils.js"

function main(){
    const numeros = input("Informe 5 números: ").split(" ").map(Number)
    const num1 = numeros[0]
    const num2 = numeros[1]
    const num3 = numeros[2]
    const num4 = numeros[3]
    const num5 = numeros[4]

    const media_num = media(num1, num2, num3, num4, num5)
    console.log(`média: ${media_num}`)

    const maior = maior_que_media(num1, num2, num3, num4, num5, media_num)

    function media(a,b,c,d,e){
        return ((a + b + c + d + e)  / 5)
    }

    function maior_que_media(a,b,c,d,e,media){
        let maiores
        if(a>media){
            console.log(a)
        }
        if(b>media){
            console.log(b)
        }
        if(c>media){
            console.log(c)
        }
        if(d>media){
            console.log(d)
        }
        if(e>media){
            console.log(e)
        }
    }

}
main()