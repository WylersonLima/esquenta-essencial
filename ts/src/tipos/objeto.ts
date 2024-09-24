const pessoa: { nome: string; idade: number } = {
    nome: 'Maria',
    idade: 30,
};

pessoa.idade = 31;
pessoa.nome = 'João';

console.log(pessoa.nome);
console.log(pessoa.idade);
