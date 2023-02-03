const Raquete = class {
  constructor(xPosicao, yPosicao, comprimento, altura){
    this._xPosicao = xPosicao;
    this._yPosicao = yPosicao;
    this._comprimento = comprimento;
    this._altura = altura;
  }
  
  mostrar(){
    rect(this._xPosicao, this._yPosicao, this._comprimento, this._altura);
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
  
  subir(){
    this._yPosicao -= 10;
    this.setYPosicao(this._yPosicao);
  }
  
  descer(){
    this._yPosicao += 10;
    this.setYPosicao(this._yPosicao);
  }
}