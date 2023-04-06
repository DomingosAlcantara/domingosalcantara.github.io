const Campo = class {
  #altura = 0;
  #largura = 0;
  constructor(dimensoesGerais) {
    this.altura(dimensoesGerais.altura);
  }

  set altura(h) {
    try {
      this.#altura = h;
    } catch {
      this.#altura = 0;
    }
  }

  set largura(w) {
    try {
      this.#largura = w;
    } catch {
      this.#largura = 0;
    }
  }

  isValid(value) {
    return Number.isInteger(value);
  }
};

module.exports = Campo();
