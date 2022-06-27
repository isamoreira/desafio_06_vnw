let dados = {
    nome:'Isabella',
    idade: '32',
    cidadeNascimento: 'Brumado',
}

dados.comidaFavorita = 'Cozido Baiano'

console.log(dados)

delete dados.idade

console.log(dados)

let cadastro = [{
    nome: 'Ana',
    idade: 12,
    telefone: '123456',
    amigos: ('Maria', 'Luiza', 'Carla', 'Moana')
},
{
    nome: 'Maria',
    idade: 13,
    telefone: '2548632',
    amigos: ('Antonia', 'Ana', 'Mariana', 'Luana', 'Marcia')
},
{
    nome: 'Luiza',
    idade: 11,
    telefone: '222222',
    amigos: ('Laura', 'Antonia', 'Lucia', 'Isabella')
},
{
    nome: 'Antonia',
    idade: 15,
    telefone: '555556',
    amigos: ('Laura',' Maria', 'Ana', 'Vitoria')
},
{
    nome: 'Laura',
    idade: 14,
    telefone: '554478',
    amigos: ('Maria' ,'Luiza', 'Sara','Lucia')
}
]

console.log(cadastro[0].amigos)
console.log(cadastro[1].amigos)
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)
console.log(cadastro[4].amigos)



