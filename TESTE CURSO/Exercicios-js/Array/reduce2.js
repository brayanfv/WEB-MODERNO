const alunos = [
    { nome: 'Brayan', nota: 7.3, bolsista: true },
    { nome: 'Alice', nota: 9.2, bolsista: false },
    { nome: 'João', nota: 9.8, bolsista: true },
    { nome: 'Luque', nota: 8.7, bolsita: false }
]

// Todos os alunos sao bolsitas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Algum aluno e bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))