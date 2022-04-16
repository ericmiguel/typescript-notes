// #####################################################################################
// Funções
// #####################################################################################

function soma(a: number, b: number): number {
    return a + b
}

function log(msg: string | number): void {
    console.log(msg)
}

log(2)
log("Olá")


// #####################################################################################
// Interface de funções
// Outra propriedade das interfaces que as diferem dos Types é a possibilidade
// de criar interfaces para funções.
// #####################################################################################

interface FuncaoMatematica {
    (a: number, b: number): number
}

const soma2: FuncaoMatematica = (a, b) => a + b
const multiplicao: FuncaoMatematica = (a, b) => a * b
const divisao: FuncaoMatematica = (a, b) => a / b
