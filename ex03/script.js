// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  

let somaTaxa = 0
let somaRecebimento = 0;
transacoes.forEach((item)=>{
    if(item.descricao.includes('Taxa')){
        somaTaxa += Number(item.valor.slice(3));
    }
    
    else if(item.descricao.includes('Recebimento')){
        somaRecebimento += Number(item.valor.slice(3))
    }
});
console.log(somaTaxa);
console.log(somaRecebimento);



  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

;
console.log(transportes.split(';'))

  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
const novoHtml = html.replace(/['span']+/g,'a');
console.log(novoHtml);

const novoHtml2 = html.split("span");
const htmlNovo = novoHtml2.join("a");
console.log(htmlNovo);


  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length-1));

  
  // Retorne o total de taxas
  const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
let total = 0;
transacoes1.forEach((item)=>{
    item.toLowerCase().includes('taxa') ? total++ : false;
});
console.log(total);


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})



  
  