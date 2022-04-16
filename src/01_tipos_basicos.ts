// #####################################################################################
// Tipos básicos
// #####################################################################################

let id: number = 5
let nome: string = "Eric"
let esta_aprendendo_typescript: boolean = true
let x: any = "olá?"


// #####################################################################################
// Arrays
// #####################################################################################

// Para declarar um Array, a síntaxe de tipagem muda pouco:
let ids: number[] = [1, 2, 3]
ids.push(4)

// O mesmo vale para outros tipos:
let arr1: string[] = ["a", "b", "c"]
let arr2: boolean[] = [true, false, true]


// #####################################################################################
// Tuplas
// #####################################################################################

// É possível usar um Array de tipos diferentes com any
let arr3: any[] = [1, "olá?", true]

// Mas Tuplas são preferíveis
let arr4: [string, number, boolean] = ["olá?", 1, true]

// Array de Tuplas
let empregados: [number, string][] = [
    [1, "Eric"],
    [2, "Maria"],
    [3, "João"]
]


// #####################################################################################
// Union
// #####################################################################################

let un1: string | number = 22


// #####################################################################################
// Enum
// #####################################################################################

enum Cores {
    Vermelho = "vermelho",
    Verde = "verde",
    Azul = "azul"
}

console.log(Cores.Vermelho)
console.log(Cores.Verde)
console.log(Cores.Azul)

enum Valores {
    Um = 1,
    Dois = 2,
    Tres = 3
}

console.log(Valores)
console.log(Valores[1]) // Valores["1"] também funciona


// #####################################################################################
// Objects (types)
// #####################################################################################

type Usuario = {
    nome: string,
    idade: number,
}

const usuario1: Usuario = {
    nome: "Eric",
    idade: 22
}

console.log(usuario1)
console.log(usuario1.nome)


// #####################################################################################
// Interfaces
// são semelhantes a Types, mas possuem algumas diferenças:
// - Interfaces podem ser tipadas com Unions
// - Interfaces possuem atributos especiais:
// #####################################################################################

interface Interface1 {
    readonly nome: string // atributo imutável
    idade?: number // atributo opcional
}

const usuario2: Interface1 = {
    nome: "Eric",
}

usuario2.idade = 28
console.log(usuario2)


// #####################################################################################
// Type assertion
// #####################################################################################

let cid: any = 1
let cid_2 = cid as number  // let cid_2 = <number>cid

