const Raquete = class {
  constructor(xPosicao, yPosicao, comprimento, altura){
    this._xPosicao = xPosicao;
    this._yPosicao = yPosicao;
    this._comprimento = comprimento;
    this._altura = altura;
  }
  
  mostrar(dimensoes){
    rect(dimensoes.x, dimensoes.y, dimensoes.comprimento, dimensoes.altura);
  }
  
  setYPosicao(valor){
    this._yPosicao = valor;
  }
  
  getYPosicao(){
    return this._yPosicao;
  }
  
  getXPosicao(){
    return this._xPosicao;
  }
  
  getComprimento(){
    return this._comprimento;
  }
  
  getAltura(){
    return this._altura;
  }
  
  subir(passo = 10){
    this.setYPosicao(this.getYPosicao() - passo);
  }
  
  descer(passo = 10){
    this.setYPosicao(this.getYPosicao() + passo);
  }
}