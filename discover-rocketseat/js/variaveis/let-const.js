// let e const - const e let são locais e só funcionam no escopo onde foi criado.

/** Scope let
 * / let pode ter um valor diferente dentro de cada bloco
 */

let y = 1;

{
  {
    {
      y = 0;
      console.log("existe y ", y);
    }
  }
}

console.log("existe y depois do bloco? ", y);

/////

let j = 0;

for (let j = 10; j > 0; j--) {
  console.log("j agora é :" + j);
}

//=======================================================//

/** Scope const  */

const x = 1;

{
  {
    {
      const y = 0;
      console.log("existe x ", x);
    }
  }
}

console.log("existe x depois do bloco? ", x);

/////
const teste = 1;

if (true) {
  const teste = 2;
  console.log(teste); // 2
}

console.log(teste); // 1

//=======================================================//

/** Scope var  */

console.log("existe b antes do bloco? ", b);

{
  var b = 5;
}

console.log("existe b depois do bloco? ", b);

// exemplos var
var nome = "João";

console.log("Meu nome é: ", nome); // Meu nome é:  João

function sayMyName() {
  var nome = "Pedro";
  console.log("Meu nome é :", nome); // Meu nome é : Pedro
}

sayMyName();

console.log(nome); // João
