class Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string | number | null;
    ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string | number | null = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
}

const usuario: Usuario = new Usuario(1, 'João', 'joao@empresa.com.br', true, 'fluminense96');
const usuario2: Usuario = new Usuario(2, 'Pedro', 'pedro@empresa.com', true, 123456789)
console.log(usuario, usuario2);