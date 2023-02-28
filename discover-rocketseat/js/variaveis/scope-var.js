var x = 0;

function f() {
  var x = (y = 1); // x é declarado localmente,y não é!
}
f();

console.log(x, y); // 0, 1
// x é uma variável global como experado
// y vazou para fora da função!

var a;
console.log("existe a antes dio bloco?", a);

{
  a = 4;
}

console.log("existe a depois do bloco? ", a);
