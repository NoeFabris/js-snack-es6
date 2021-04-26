var bici = []

for (let i = 1; i < 6; i++) {
    var bicicletta = {}
    bicicletta['nome'] = 'Bici ' + (i)
    bicicletta['peso'] = numGenDecimal(0, 15)
    bici.push(bicicletta)
}
console.log(bici)

var nome
var peso = 15

for (let i = 0; i < bici.length; i++) {
    let biciControllata = bici[i]
    console.log(biciControllata['peso'])
    if (parseFloat(biciControllata['peso']) < peso) {
        console.log('bici leggera')
        // biciPiuleggera['peso'] = parseFloat(biciControllata['peso'])
        // biciPiuleggera['nome'] = biciControllata['nome']
        var {nome, peso } = biciControllata
    }
}

console.log(`Il nome della bici piu leggera è ${nome} e pesa ${peso} Kg`)