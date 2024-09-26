interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático' | 'voador';
    domestico: boolean;
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Victor',
};

let calopsita: Pet = {
    nome: 'Shakira',
    tipo: 'voador',
    domestico: true,
    dono: 'Pedro',
};

console.log(calopsita);
console.log(cachorro);
