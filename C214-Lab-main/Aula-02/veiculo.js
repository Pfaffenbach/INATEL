class Veiculo {
    placa = String(this.placa);
    ano;
    anoString = String(this.ano2);

    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(placa) {
        this.placa = placa;
    }

    setAno(ano) {
        this.ano = ano;
    }

    setAno2(anoString) {
        this.anoString = anoString;
    }

    getPlaca() {
        return this.placa;
    }

    getAno() {
        return this.ano;
    }

    exibirDados() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Ano String: ${this.anoString}`);
    }
}

class Caminhao extends Veiculo {
    eixos;

    constructor(placa, ano, anoString, eixos) {
        super(placa, ano, anoString),
            this.eixos = eixos;
    }

    setEixos(eixos) {
        this.eixos = eixos;
    }

    getEixos() {
        return this.eixos;
    }

    exibirDados() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Ano String: ${this.anoString}`);
        console.log(`Eixos: ${this.eixos}`);
    }
}

class Onibus extends Veiculo {
    assentos;

    constructor(placa, ano, anoString, assentos) {
        super(placa, ano, anoString),
            this.assentos = assentos;
    }

    setAssentos(assentos) {
        this.assentos = assentos;
    }

    getAssentos() {
        return this.assentos;
    }

    exibirDados() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Ano String: ${this.anoString}`);
        console.log(`Assentos: ${this.assentos}`);
    }
}

let veiculo = new Veiculo("ABC123",2001,"2000/2001");
let caminhao = new Caminhao("CDE123",2000,"1999/2000",3);
let onibus = new Onibus("FGH123",2015,"2015",30);

veiculo.exibirDados();
caminhao.exibirDados();
onibus.exibirDados();