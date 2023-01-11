const dimensoesDaBolinha = {
  get diametro(d = 13) { return d; },
  get raio(d) { return (d / 2) },
  posicionamento: {
    get x(comprimento) { return (comprimento / 2) } ,
    get y() { return (dimensoesDoCampo.altura / 2) }
  },
  velocidade: 6
};

const posicionamento = dimensoesDaBolinha.posicionamento;

const bolinha = new Bolinha();

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");  
}

function setup(){
  createCanvas(comprimentoArea, alturaArea);
  //trilha.loop();
  cor = 'green';
  //Carregando os jogadores
  for(let i = 0; i < xJogadoresTime1.length; i++){
    time1.push(new Raquete(xJogadoresTime1[i], yJogadoresTime1, 
                           comprimentoDoJogador, alturaDoJogador));
    
    time2.push(new Raquete(xJogadoresTime2[i], yJogadoresTime2, 
                          comprimentoDoJogador, alturaDoJogador));
  }
}

function draw(){
  background('green');
  
  desenharCampo();
  mostrarAreaDoGol();
  mostrarJogadores();
  movimentaTime1();
  movimentaTime2();
  mostrarBolinha(posicionamento.x, posicionamento.y, dimensoesDaBolinha.diametro);
  moverBolinha();
  incluirPlacar();
  verificaColisaoBordas();
  vareficaColisaoRaqueteClasse(time1);
  vareficaColisaoRaqueteClasse(time2);
  verificarGol();
}

function mostrarAreaDoGol(){
  for(let i = 0; i < xAreaDoGol.length; i++){
    fill(255);
    areaDoGol.push(new Raquete(xAreaDoGol[i], yAreaDoGol, 
                comprimentoAreaDoGol, alturaAreaDoGol));
    areaDoGol[i].mostrar();
  }
}

function mostrarJogadores(){
  for(let i = 0; i < time1.length; i++){
    fill('red');
    time1[i].mostrar();
    
    fill('blue');
    time2[i].mostrar();
  }
}

function movimentaTime1(){
  if(keyIsDown(83)){
    for(let i = 0; i < time1.length; i++){
      time1[i].descer();
    }
    
  }
  
  if(keyIsDown(87)){
    for(let i = 0; i < time1.length; i++){
      time1[i].subir();
    }
  }
}

function movimentaTime2(){
  if(keyIsDown(DOWN_ARROW)){
    for(let i = 0; i < time1.length; i++){
      time2[i].descer();
    }
    
  }
  
  if(keyIsDown(UP_ARROW)){
    for(let i = 0; i < time1.length; i++){
      time2[i].subir();
    }
  }
}

const mostrarBolinha = (x, y, diametro) => bolinha.mostrar(x, y, diametro);

function moverBolinha(){
  bolinha.movimentar();
}

function verificaColisaoBordas(){
  if(((bolinha.faceDireita()) > (comprimentoAreaDoCampo)) || 
     ((bolinha.faceEsquerda()) < xAreaDoCampo)){
    bolinha.inverterDirecaoEmX();
  }
  
  if(((bolinha.faceSuperior() < yAreaDoCampo) || 
      ((bolinha.faceInferior()) > (alturaAreaDoCampo + 30)))){
    bolinha.inverterDirecaoEmY();
  }
}

function vareficaColisaoRaqueteClasse(time){
  for(let i = 0; i < time.length; i++){
    colidiu = collideRectCircle(time[i].getXPosicao(), time[i].getYPosicao(), 
                               time[i].getComprimento(), time[i].getAltura(), 
                               bolinha.getXPosicao(), bolinha.getYPosicao(),
                               bolinha.getRaio());

    if(colidiu){
      bolinha.inverterDirecaoEmX();
      raquetada.play();
    }
  }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect((xMeioDoCampo / 2), 10, 40, 20);
  fill(255);
  text(pontosTime1, ((xMeioDoCampo / 2) + 20), 26);
  
  fill(color(255, 140, 0));
  rect((xMeioDoCampo + (xMeioDoCampo / 2)), 10, 40, 20);
  fill(255);
  text(pontosTime2, ((xMeioDoCampo + (xMeioDoCampo / 2)) + 20), 26);
}

function fezGol(x){
    colidiu = collideRectCircle(x, yAreaDoGol, comprimentoAreaDoGol, 
                                alturaAreaDoGol, bolinha.getXPosicao(), 
                                bolinha.getYPosicao(), bolinha.getRaio());
  
  if(colidiu){
    (x > xMeioDoCampo) ? pontosTime1++ : pontosTime2++;
    ponto.play();
    reiniciaJogo();
  }
}

function verificarGol(){
  for(let i = 0; i < xAreaDoGol.length; i++){
    (i === 0) ? fezGol(xAreaDoCampo) : fezGol(comprimentoAreaDoCampo);
  }
}

function reiniciaJogo(){
    bolinha.setXPosicao(xMeioDoCampo);
    bolinha.setYPosicao(yMeioDoCampo);
    setTimeout(bolinha.mostrar(), 3000);
 
}

function desenharCampo(){
  desenharAreaDoCampo();
  //desenharCirculoCentral();
  desenharMeioDoCampo();
  desenharBolinhaDoCentro();
  //desenharMeiaLua();
}

function desenharAreaDoCampo(){
  cor = 'green';
  fill(cor);
  stroke(255);
  //strokeWeight(4);
  new Raquete(...areaDoCampo).mostrar();
}

function desenharCirculoCentral(){
  //stroke('rgb(0, 128, 0)');
  noFill();
  strokeWeight(2);
  
  new Bolinha(...circuloCentral).mostrar();
}

function desenharMeioDoCampo(){
  cor = 'white'
  fill(cor);
  new Raquete(...meioDoCampo).mostrar();
}

function desenharBolinhaDoCentro(){
  new Bolinha(...bolinhaDoCentro).mostrar();
}

function desenharMeiaLua(){
  //noFill();
  cor = 'white';
  stroke(cor);
  strokeWeight(2);
  new Bolinha(...meiaLua1).mostrar();
  //new Bolinha(...meiaLua2).mostrar();
}