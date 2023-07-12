function Carro(marca,preco){
    this.marca = marca,
    this.preco = preco
}

const ferrari = new Carro('Ferrari', 1000000);
const ford = new Carro ('Ford', 200000);

console.log(ferrari);
console.log(ford);