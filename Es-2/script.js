var squadre = [
    {
        'nome' : 'Inter',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Milan',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Juventus',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Napoli',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Roma',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    }
]

for (let i = 0; i < 5; i++) {
    let squadraGen = squadre[i]

    squadraGen['puntiFatti'] = numGen(0, 50)
    squadraGen['falliSubiti'] = numGen(0, 20)
}
console.log(squadre)

var nomiSquadre = []
var numeroFalliSubiti = []

for (var {nome : nomiSquadre, falliSubiti : numeroFalliSubiti} of squadre) {
    console.log(nomiSquadre)
    console.log(numeroFalliSubiti)
}


