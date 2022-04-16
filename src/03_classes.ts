// #####################################################################################
// Classes
// #####################################################################################

class Pessoa {
    // Typescript suporta "access modifiers"

    // Os atributos da classe são públicos por padrão
    public nome: string
    idade: number // já que é o padrão, não é obrigatório declarar public

    // mas é possível criar valores privados.
    // Atributos privados serão acessíveis, literalmente, apenas dentro da classe,
    // pois nem mesmo sub-classe terão acesso a esse atributo.
    private dinheiro: number = 10
    
    // Por outro lado, atributos protegidos podem ser herdados
    protected endereco: string = "Rua dos Bobos, 0"

    // o constructor é um método especial que é executado automaticamente quando
    // uma classe é instanciada; ou seja, quando um objeto dessa classe é criado.
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    falar(): void {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }

    envelhecer(): void {
        this.idade++
    }
}

const pessoa1 = new Pessoa("Eric", 28)
pessoa1.falar()
console.log(pessoa1.idade)
pessoa1.envelhecer()
console.log(pessoa1.idade)


// #####################################################################################
// Interface de classes
// Assim como funções podem ser implementadas com interfaces, classes também podem
// #####################################################################################

interface InterfacePessoa {
    nome: string
    idade: number
    falar(): void
    envelhecer(): void
}


// Vou implementar exatamente a mesma classe, mas com a interface
class Pessoa2 implements InterfacePessoa {
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    falar(): void {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }

    envelhecer(): void {
        this.idade++
    }
}


// #####################################################################################
// Extender uma classe
// É possível adicionar métodos e atributos a uma classe existente.
// #####################################################################################

class Empregado extends Pessoa {
    cargo: string

    constructor(nome: string, idade: number, cargo: string) {
        super(nome, idade)
        this.cargo = cargo
    }

    // claro, é possível sobrescrever um método da classe mãe
    falar(): void {
        console.log(
            `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}`
        )
    }
}

const empregado1 = new Empregado("Eric", 28, "Dev")
console.log(empregado1)
empregado1.falar()
