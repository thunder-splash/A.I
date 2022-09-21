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

const sigmoid = x => 1/(1+Math.exp(-x));

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
