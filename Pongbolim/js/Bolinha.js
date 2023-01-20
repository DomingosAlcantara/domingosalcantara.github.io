const { isNumber } = require("lodash");

//Bolinha.js
const Bolinha = class {
  #x = 0;
  #y = 0;
  #diametro = 0;
  #raio = 0;
  #velocidade = 0;

  constructor( objConfig ) {
    this.#diametro = objConfig.diametro;
    this.x = objConfig.posicinamento.x;
    this.y = objConfig.posicinamento.y;
    this.#velocidade = objConfig.velocidade;
  }

  #isValid(number){
    return (!isNumber(number) || number <= 0) ? false : true;
  }
  
  definirCor(cor) {
    fill(cor);
    return this;
  }

  mostrar(x, y, diametro) {
    circle(x, y, diametro);
  }
  
  movimentar(x, y, velocidade) {
    return {
      x: (x + velocidade),
      y: (y + velocidade)
    };
  }

  set #velocidade (v){
    if(isNumber(v) && v > 0){
      this.#velocidade = v;
    }
  }

  get #velocidade (){
    return this.#velocidade;
  }

  get raio() {
    return this.#raio;
  }

  set raio(diametro) {
    this.raio = (this.#isValid(diametro) ? (diametro / 2) : 0);
  }


  set #diametro(d) {
    this.#diametro = d;
  }

  get diametro() {
    return this.#diametro;
  }

  inverterDirecaoEmX() {
    this.#velocidade *= -1;
  }

  inverterDirecaoEmY() {
    this.#velocidade *= -1;
  }

  faceDireita() {
    return this.#x + this.raio;
  }

  faceEsquerda() {
    return this.#x - this.raio;
  }

  faceSuperior() {
    return this.#y - this.raio;
  }

  faceInferior() {
    return this.#y + this.raio;
  }

  set x(x) {
    this.#x = x;
  }

  get x() {
    return this.#x;
  }

  set y(y) {
    this.#y = y;
  }

  get y() {
    return this.#y;
  }
};
