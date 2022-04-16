# Typescript Notes

Minhas anotações (100% for fun) sobre Typescript.

## Começando

### Instalação

```bash
npm i -g typescript
```

### Configuração básica

```bash
tsc --init
```

Altere os valores de ```tsconfig.json``` da seguinte forma:

* "outDir": "./dist"
* "rootDir": "./src"
* "removeComments": true

### Estrutura básica

Mantenha os arquivos TS dentro de um diretório ```src```.

```code
.
├── LICENSE
├── README.md
├── src
│   └── index.ts
└── tsconfig.json
```

### Compilando

Dadas as configuração já feitas, basta executa o comando:

```bash
tsc
```

A pasta ```dist``` será criada e arquivos js serão emitidos.

```code
.
├── LICENSE
├── README.md
├── dist
│   └── index.js
├── src
│   └── index.ts
└── tsconfig.json
```
