// #####################################################################################
// Generics
// Gemerics visam construir componentes reutilizáveis
// #####################################################################################

// Nesse contexto, "T" funcionará como um tipo... Genérico. Tah-daaaaa!
// O tipo genérico pode receber qualquer nome e funcionará como um placeholder.
function formarArray<T>(itens: T[]): T[] {
    return new Array().concat(itens)
}

// Note como o placeholder T foi substituído pelos tipos dos parâmetros
let arrayNumerico = formarArray<number>([1, 2, 3])
let arrayTexto = formarArray<string>(["a", "b", "c"])


// #####################################################################################
// Generic types (com interface)
// #####################################################################################

interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;


// #####################################################################################
// Padrão Factory com classes e generics
// #####################################################################################

class Funcionario {
    protected sabe_programar: boolean = false

    constructor(sabe_programar: boolean) {
        this.sabe_programar = sabe_programar
    }

}

class Analista extends Funcionario {

    constructor(sabe_programar: boolean = false) {
        super(sabe_programar)
    }

    programar(): void {
        console.log("Vai dar merda... Deu merda.")
    }
}

class Desenvolvedor extends Funcionario {

    constructor(sabe_programar: boolean = true) {
        super(sabe_programar)
    }

    programar(): void {
        console.log("Deixa que eu resolvo a cagada!")
    }
}


function Instanciar<A extends Funcionario>(c: new () => A): A {
    return new c();
}

Instanciar(Analista).programar();
Instanciar(Desenvolvedor).programar();
