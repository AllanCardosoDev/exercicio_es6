// Define a classe Aluno
class Aluno {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
};

// Cria um array de alunos
const alunos = [
    new Aluno('Allan', 9),
    new Aluno('Luanna', 8),
    new Aluno('Bernardo', 10),
    new Aluno('Dante', 10),
    new Aluno('Maria', 4),
    new Aluno('Jefferson', 3),
    new Aluno('Hiaderson', 2),
    new Aluno('Bruna', 4)
];

// Função para checar alunos aprovados
function checarNotas(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Chama a função checarNotas com o array de alunos e exibe o resultado no console
const alunosAprovados = checarNotas(alunos);
console.log(alunosAprovados);