//Definindo as dimensões da janela
const alturaArea = 500;
const comprimentoArea = 800;

//Definindo as dimensões da bolinha
const diametro = 13;
const raio = (diametro / 2);

//Posicionamento da bolinha
let xBolinha = (comprimentoArea / 2);
let yBolinha = (alturaArea / 2);

//Velocidade Inicial da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Caracteristicas da área do gol
const comprimentoAreaDoGol = 5;
const alturaAreaDoGol = 110;
const xAreaDoGol = [5, (comprimentoArea - 10)];
const yAreaDoGol = ((alturaArea / 2) - (alturaAreaDoGol / 2));

//Informações do meio de campo
const comprimentoMeioDeCampo = 5;
const xMeioDoCampo = (comprimentoArea / 2);
const yMeioDoCampo = (alturaArea / 2);

//Caracteristicas gerais dos jogadores
let comprimentoDoJogador = 10;
let alturaDoJogador = 90;

//Caracteristicas do Time1
let xJogadoresTime1 = [150, 500];
let yJogadoresTime1 = (yMeioDoCampo - (alturaDoJogador + (alturaDoJogador / 2)));
let pontosTime1 = 0;

//Caracteristicas do Time2
let xJogadoresTime2 = [300, 640];
let yJogadoresTime2 = (yMeioDoCampo + (alturaDoJogador / 2)); 
let pontosTime2 = 0;

//Instanciando a classe Bolinha
const bolinha = new Bolinha(xMeioDoCampo, yMeioDoCampo, 
                            diametro, velocidadeXBolinha, velocidadeYBolinha);

let areaDoGol = [];

let time1 = [];
let time2 = [];

let colidiu = false;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

let cor;

let xAreaDoCampo = 10;
let yAreaDoCampo = 30;
let comprimentoAreaDoCampo = 780;
let alturaAreaDoCampo = 450;

let areaDoCampo = [xAreaDoCampo, yAreaDoCampo, 
                   comprimentoAreaDoCampo, 
                   alturaAreaDoCampo];

let meioDoCampo = [(xMeioDoCampo-1), yAreaDoCampo, 3, 
                   alturaAreaDoCampo];
let bolinhaDoCentro = [xMeioDoCampo, yMeioDoCampo, 7];
let circuloCentral = [xMeioDoCampo, yMeioDoCampo, 200];
//let meiaLua1 = [xMeioDoCampo, yMeioDoCampo, 200];
let grandeArea1 = [];
let pequenaArea1 = [];
//let meiaLua2 = [xMeioDoCampo, yMeioDoCampo, 200];
let grandeArea2 = [];
let pequenaArea2 = [];

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
  mostraBolinha();
  moveBolinha();
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

function mostraBolinha(){
  bolinha.mostrar();
}

function moveBolinha(){
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