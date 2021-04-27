console.log('Es 3')
es = () => {
    const a = numGen(0, 5)
    const b = numGen(6, 50)
    console.log(a, b)
    let numeri = []
    for (let i = 0; i < 10; i++) {
        numeri[i] = numGen(0,50)  
    }
    console.log(numeri)
    const numeriCompresi = numeri.filter((numero) => {
        return numero > a && numero < b
    })
    if (numeriCompresi.length === 0) {
        console.log(`Non ci sono numeri compresi`)
    } else {
        console.log(numeriCompresi)
    }
}

es()