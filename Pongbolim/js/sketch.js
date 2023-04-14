const comprimento = 780;
const altura = 450;
const x = 20;
const y = 30;

function setup() {
  definirAreaTotal(comprimento)(altura);
}

function draw() {
  definirCor("black")(background);
  definirCor("green")(fill);
  definirCor("white")(stroke);
  definirAreaDoCampo(comprimento)(altura)(x)(y);
}
