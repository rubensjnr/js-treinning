// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }
function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = ()=>{
        console.log(this.nome + ' andou!!');
    }
}
const rubens = new Pessoa("Rubens", 26);
const fernanda = new Pessoa("Fernanda", 22);

console.log(rubens);
console.log(fernanda);
rubens.andar();
fernanda.andar();
  

  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  function Dom(elemento){
    this.elements = ()=>{
        console.log(elemento);
        return document.querySelectorAll(elemento);
    }
    this.addClass = (classe)=>{
        this.elements().forEach((el)=>{
            el.classList.add(classe);
            console.log('classe ' + classe + ' adicionada ao elemento');
        });
    }
    this.removeClass = (classe)=>{
        this.elements().forEach((el)=>{
            el.classList.remove(classe);
            console.log('classe ' + classe + ' removida do elemento');
        })
    }
  }

  const li = new Dom('li');
  li.addClass('cor-cinza');
  li.removeClass('cor-cinza');