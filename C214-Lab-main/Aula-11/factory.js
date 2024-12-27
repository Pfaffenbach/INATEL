// Classe convencional
class Celular1 {
    constructor(modelo) {
        this.modelo = modelo
    }

    getModelo() {
        return this.modelo
    }
}

const celular1 = new Celular1('Iphone SE 2°Gen')
console.log(celular1.getModelo())

// Factory
const Celular2 = modelo => ({
    modelo,
    getModelo: () => modelo
})
const celular2 = Celular2('Iphone SE 3°Gen')
console.log(celular2.getModelo())