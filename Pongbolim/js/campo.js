const definirAreaTotal = (comprimento) => (altura) => {
  return createCanvas(comprimento, altura);
};

const definirCor = (cor) => {
  return fill(cor);
};

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

module.exports = {
  definirAreaDoCampo,
  definirCor,
  definirAreaTotal,
};
