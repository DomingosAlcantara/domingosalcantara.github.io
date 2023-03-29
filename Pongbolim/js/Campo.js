const Campo = class {
    dimensoes = {
        afastamentoEmX = 0,
        afastamentoEmY = 0,
        altura = 0,
        comprimento = 0,
    }

    constructor(dimensoes){
        this.dimensoes = dimensoes;
    }

    montarCampo(){

    }

    definirAreaTotalDoCampo(dimensoes){
        rect(dimensoes.afastamentoEmX, dimensoes.afastamentoEmY, dimensoes.comprimento, dimensoes.altura);
    }
}