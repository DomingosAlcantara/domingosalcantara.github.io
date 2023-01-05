const dimensoesDoCampo = {
    altura: 500,
    comprimento: 800
},
  
const dimensoesDaBolinha = {
  get diametro() {13},
  get raio() {(diametro / 2)},
  posicionamento: {
    get x() {(dimensoesDoCampo.comprimento / 2)} ,
    get y() {(dimensoesDoCampo.altura / 2)}
  },
  velocidade: 6
},

const dimensoesDoGol = {
  comprimento: 5,
  altura: 110,
  posicionamento: {
    x: [5, 790],
    y: 195
  }
}

  
  //Informações do meio de campo
  const dimensoesDoMeioDeCampo = {
    
  }
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
  