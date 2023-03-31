const Campo = class {
    dimensoes = {
        altura: 0,
        comprimento: 0
    }

    constructor(dimensoes){
        this.dimensoes = dimensoes;
    }

    montarCampo(){

    }

    definirAreaTotalDoCampo(dimensoes){
        rect(dimensoes.comprimento, dimensoes.altura);
    }

    inserirLinhaDoMeioDeCampo(dimensoes){

    }
}