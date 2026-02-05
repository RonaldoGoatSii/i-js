
function funcA() { 
    let alunos = [
        {id: 1, name: 'João', grades: [0, 13, 17], role: 'admin'},  
        {id: 2, name: 'Maria', grades: [15, 12, 16], role: 'editor'}, 
        {id: 3, name: 'Pedro', grades: [16, 14, 18], role: 'default'},
        {id: 4, name: '', grades: [], role: 'default'},             
        {id: 5, grades: [10, 12], role: 'editor'}                   
    ];

    return alunos;
}

function getAverage(grades) {

    if (!grades || grades.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

function funcB(a) {                                                                
    const relatorio = [];

    for (let i = 0; i < a.length; i++) {
        const aluno = a[i]; 
        let nameGiven = "";

        if (aluno.name === undefined || aluno.name === null) {
            nameGiven = "Anónimo";
        }
        else if (aluno.name === "") {
            nameGiven = "Sem nome";
        }
        else {
            nameGiven = aluno.name;
        }

        const average = getAverage(aluno.grades);
        const status = average >= 10 ? 'Aprovado' : 'Reprovado'

        let label = "";
        switch (aluno.role) {
            case "admin":
                label = "[Acesso total]";
                break;

            case "editor":
                label = "[Pode editar]";
                break;

            default:
                label = "[Acesso limitado]";
                break;
        }

        const index = i + 1;
        const linha = `${index}) ${nameGiven} - média: ${average} - status: ${status} ${label}`;
        relatorio.push(linha);
    }
    return relatorio;
}

function funcC(b) {
    for (let i = 0; i < b.length; i++) {
        console.log(b[i]);
    }
}

const alunos = funcA();

const linhas = funcB(alunos);

funcC(linhas);
