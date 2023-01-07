//Bolinha.js
const Bolinha = class {
  // constructor(xPosicaoInicial, yPosicaoInicial, diametro, 
  //              velocidadeEixoX, velocidadeEixoY){
  //   this._diametro = diametro;
  //   this._xPosicao = xPosicaoInicial;
  //   this._yPosicao = yPosicaoInicial;
  //   this._velocidadeEixoX = velocidadeEixoX;
  //   this._velocidadeEixoY = velocidadeEixoY;
  //   this._raio = (this._diametro / 2);
  // }
  
  mostrar(x, y, diametro){
    fill(255);
    circle(x, y, diametro);
  }
  
  movimentar(){
    this._xPosicao += this._velocidadeEixoX;
    this._yPosicao += this._velocidadeEixoY;
  }
  
  getRaio(){
    return this._raio;
  }
  
  inverterDirecaoEmX(){
    this._velocidadeEixoX *= -1;
  }
  
  inverterDirecaoEmY(){
    this._velocidadeEixoY *= -1;
  }
  
  faceDireita(){
    return (this._xPosicao + this._raio);
  }
  
  faceEsquerda(){
    return (this._xPosicao - this._raio);
  }
  
  faceSuperior(){
    return (this._yPosicao - this._raio);
  }
  
  faceInferior(){
    return (this._yPosicao + this._raio);
  }
  
  setXPosicao(x){
    this._xPosicao = x;
  }
  
  getXPosicao(){
    return this._xPosicao;
  }
  
  setYPosicao(y){
    this._yPosicao = y;
  }
  
  getYPosicao(){
    return this._yPosicao;
  }
}

