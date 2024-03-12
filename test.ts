console.log('1) Observe o trecho de código abaixo:')

const indice = 13
let soma = 0
let k = 0
while(k < indice){
    k++
    soma = soma + k
}
console.log(`Ao final do processamento, qual será o valor da variável SOMA?`)
console.log(`questão 1) resposta: ${soma}`)

console.log ('#############################################################################################')

console.log(`
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
    ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
`)

const fibonacci = (index: number): number[] => {
    const fibSerie: number[] = []
    let previous = 0
    let current = 1
    fibSerie[0] = 0
    fibSerie[1] = 1
        for(let i = 2; i<index; i++){
            const next = previous + current
            previous = current
            current = next
            fibSerie.push(next)
        }
        return fibSerie
}

const findValueFibSerie = (value: number): string => {
    let stop = true
    let i = 0
    let fibSerie = fibonacci(10)
    while(stop){
        if(fibSerie.length <= i){
            fibSerie = fibonacci(fibSerie.length + 10)
        }
        if(fibSerie[i] === value){
            console.log(fibSerie)
            return `O número ${value} pertence a sequência Fibonacci e está localizado na posição ${i+1}`
        }
        if(fibSerie[i] > value){
            stop = false
        }
        i++
    }
    console.log(fibSerie)
    return `O número ${value} não pertence a sequência Fibonacci.`
    
}

const fibSerie = findValueFibSerie(6764)
console.log(`questão 2) ${fibSerie}`);

console.log('#############################################################################################')

console.log(`
    3) Descubra a lógica e complete o próximo elemento:

    a) 1, 3, 5, 7, 9 (adicionar 2 a cada número anterior)

    b) 2, 4, 8, 16, 32, 64, 128 (multiplicar por 2 o número anterior)

    c) 0, 1, 4, 9, 16, 25, 36, 49 (índice ao quadrado)

    d) 4, 16, 36, 64, 100 (o quadrado dos números pares)

    e) 1, 1, 2, 3, 5, 8, 13 (série de Fibonacci)

    f) 2,10, 12, 16, 17, 18, 19, ____ (Não consigo identificar nenhum padão nessa sequência.)
`)


console.log('#############################################################################################')

console.log(`
    4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.
    Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
    Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas
    até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

    Dando nome aos interruptores e aos quartos para ficar mais fácil assimilar, digamos que eu tenha os interruptores 1, 2 e 3,
    também os quartos A, B e C. Organizados dessa forma eu ligaria 2 interruptores, 1 e 2, assim, iria verificar o quarto A,
    no caso 1, se a luz estiver acesa, saberia que ou o interruptor 1 ou o 2 liga a luz do quarto A, no caso 2,
    se a luz estiver apagada teria certeza de que o interruptor 3 acende a luz do quarto A. 
    No caso 1, voltaria aos interruptores, deixaria o interruptor 1 ligado, desligaria 2 e ligaria o 3 e iria para o quarto B,
    chegando lá se a luz estiver ligada, então a sequência seria: 1 liga A, 2 liga C e 3 liga B.
    No entanto, se a luz de B estiver desligada a sequência ficaria: 1 liga A, 2 liga B e 3 liga C.
    no caso 2, voltaria aos interruptores, deixaria o  interruptor 1 ligado, desligaria 2 e ligaria 3 e iria para o quarto B,
    chegando lá se a luz estiver ligada, então a sequência seria: 1 liga B, 2 liga C e 3 liga A. No entanto,
    se a luz estiver desligada a sequência ficaria: 1 liga C, 2 liga B e 3 liga A.
`)

console.log('#############################################################################################')

console.log('5) Escreva um programa que inverta os caracteres de um string.')

const reverseString = (input: string): any => {
    let stringReversed: string[] = []
    for(let i = input.length; i > 0; i--){
        stringReversed[input.length - i] = input[i - 1]
    }
    return stringReversed.join('')
}

const text = 'Anderson Sales'
console.log(text)
console.log(`Resposta: ${reverseString(text)}`)