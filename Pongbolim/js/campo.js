const definirAreaTotal = (comprimento) => (altura) =>
  createCanvas(comprimento, altura);

const definirCor = (cor) => (fn) => fn(cor);

const definirMedidas = (medidaPrincipal) => (afastamento) =>
  medidaPrincipal - afastamento * 2;

const definirAreaDoCampo =
  (comprimento) => (altura) => (afastamentoEmX) => (afastamentoEmY) => {
    return rect(
      afastamentoEmX,
      afastamentoEmY,
      definirMedidas(comprimento)(afastamentoEmX),
      definirMedidas(altura)(afastamentoEmY)
    );
  };

const definirLinhaDoMeioDeCampo =
  (comprimentoDoCampo) => (espessuraDaLinha) => (cor) => {};
