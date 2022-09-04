const nomes = ["Helena", "Miguel", "Alice", "Étore", "Gabriel"]

const pessoas = [nomes.shift(), ...nomes.slice(2,3)]

console.log(pessoas)