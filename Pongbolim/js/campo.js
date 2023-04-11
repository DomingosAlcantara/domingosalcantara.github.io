const p5 = require("./p5/p5");

const areaTotalDoCampo = ({ dimensoes }) => {
  return p5.createCanvas(dimensoes.comprimento, dimensoes.altura);
};

const desenharAreaUtil = ()

module.exports = {
  areaTotalDoCampo,
};
