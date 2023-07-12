// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = ()=>{
        const nomeInteiro = `${this.nome} ${this.sobrenome}`;
        console.log(nomeInteiro);
        return nomeInteiro;
    }
}

const rubens = new Pessoas('Rubens', 'Junior', 26);
rubens.nomeCompleto();

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const listaNode = Object.getOwnPropertyNames(NodeList.prototype);
const listaHTML = Object.getOwnPropertyNames(HTMLCollection.prototype);
const listaDocument =  Object.getOwnPropertyNames(Document.prototype);

console.log(listaNode);
console.log(listaHTML);
console.log(listaDocument);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
console.log(li.click().constructor.name); //undefined


// Qual o construtor do dado abaixo:
li.hidden.constructor.name;


