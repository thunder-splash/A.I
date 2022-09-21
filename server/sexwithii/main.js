const SeedRandom = require("seed-random")(34)

let data = [
    {input: [0,0], output: 0},
    {input:[1,0], output: 1},
    {input:[0,1], output: 1},
    {input: [1,1], output: 0},
]

const weights = {
    i1_h1: SeedRandom(),
    i1_h2: SeedRandom(),
    i2_h1: SeedRandom(),
    i2_h2: SeedRandom(),
    h1_o1: SeedRandom(),
    h2_o1: SeedRandom()
}

const sigmoid = x => 1/(1+Math.exp(-x))
const derivative_sigmoid = x => {
    const fx = sigmoid(x);
    return fx * (1 - fx)
}

const NeuroNet = (i1, i2) => {
    const h1_input =weights.i1_h1*i1 + weights.i2_h1*i2
    const h1 = sigmoid(h1_input)

    const h2_input =weights.i1_h2*i1 + weights.i2_h2*i2
    const h2 = sigmoid(h1_input)

    const o1_input =weights.h1_o1*h1 + weights.h2_o1*h2
    const o1 = sigmoid(h1_input)

    return o1;
}

const ShowResult = () => {
    data.forEach(({input: [i1, i2], output: y}) => {
        console.log(`${i1} XOR ${i2} => ${NeuroNet(i1, i2)} expected ${y}`)
    })
}

ShowResult()

const train = () => {
    const weight_deltas = {
        i1_h1: 0,
        i1_h2: 0,
        i2_h1: 0,
        i2_h2: 0,
        h1_o1: 0,
        h2_o1: 0
    }

    for (const{input:[i1, i2], output} of data){
        const h1_input = weights.i1_h1*i1 + weights.i2_h1*i2
        const h1 = sigmoid(h1_input)

        const h2_input =weights.i1_h2*i1 + weights.i2_h2*i2
        const h2 = sigmoid(h1_input)

        const o1_input =weights.h1_o1*h1 + weights.h2_o1*h2
        const o1 = sigmoid(h1_input)

        const delta = output - o1
        const o1_delta = delta*derivative_sigmoid(o1_input)

        weights_deltas.h1_o1 += h1 * o1_delta
        weights_deltas.h2_o1 += h2 * o1_delta

        const h1_delta

    }
}

