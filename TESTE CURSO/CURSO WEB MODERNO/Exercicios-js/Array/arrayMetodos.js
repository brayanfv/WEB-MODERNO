const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // remove o ultimo colocado do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  // remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou o carro :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // retorna um NOVO array
console.log(algunsPilots1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)