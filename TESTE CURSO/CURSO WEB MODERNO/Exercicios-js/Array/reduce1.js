const alunos = [
    { nome: 'Brayan', nota: 7.3, bolsista: true },
    { nome: 'Alice', nota: 9.2, bolsista: false },
    { nome: 'João', nota: 9.8, bolsista: true },
    { nome: 'Luque', nota: 8.7, bolsita: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)