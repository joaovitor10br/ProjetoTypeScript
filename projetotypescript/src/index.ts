interface Aluno {
    nome: string;
    email: string;
    matricula: string;
    idade: number;
    ehlegal?: boolean;
}

function medirTamanhoNome(nome: String) : number {
    return nome.length;
}

const atribuirNome = (nome: string, aluno: Aluno) : void => {
    aluno.nome = nome;
}

let aluno : Aluno = {
    nome: "",
    email: "",
    idade: 0,
    matricula: ""
}

atribuirNome("joão", aluno);

console.log(aluno.nome)