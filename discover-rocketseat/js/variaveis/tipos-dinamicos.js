/**Ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código. */

let clima = true; // boolean
clima = ""; // string
console.log(typeof clima);

///////////

const tempo = true; // boolean
console.log(typeof tempo);

///////////

let nome = "Chocolate";
console.log(nome);
console.log(typeof nome);

/////////

let idade = 36;
console.log(idade);
console.log(typeof idade);

/////////

let alto = true;
console.log(alto);
console.log(typeof alto);

//////////

let cachorro = {};
console.log(cachorro);

var a;
console.log("O valor de a é " + a); // saída "O valor de a é undefined"
console.log("O valor de b é " + b); // executa uma exception de erro de referência (ReferenceError)
