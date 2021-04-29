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


// var array = [10, 5, 6, 11, 20];
// var arrr =  [true, false, true, false, true];
// function isNumeroPari(elemento) {
// 	return elemento % 2 == 0;
// }
// function isNumeroDispari(elemento) {
// 	return elemento % 2 != 0;
// }
// function filtraPari(array) {
// 	return array.filter(isNumeroDispari);
// }
// /**
//  * Non si può filtrare un array con il .map!!
//  */
// function filtraPariMap(array) {
// 	return array.map(function(value, index) {
// 		return value % 2 == 0;
// 	});
// }
// console.log(filtraPariMap(array));
// function raddoppio(array) {
// 	return array.map(element => element * 2);
// }
// function raddoppioFor(array) {
// 	const result = [];
// 	for (var i = 0; array.length; i++) {
// 		result.push(array[i] * 2);
// 	}
// 	return result;
// }
// function sublist(array, startIndex, endIndex) {
// 	return array.filter((element, index) => index >= startIndex && index <= endIndex);
// }
// function sublistForeach(array, startIndex, endIndex) {
// 	const result = [];
// 	array.forEach((a, index) => {
// 		if (index >= startIndex && index <= endIndex) {
// 			result.push(a);
// 		}
// 	});
// 	return result;
// }
// var array = [10, 5, 6, 11, 20];
// var nuovoArray = sublist(array, 1, 3);
// console.log(nuovoArray);
// var nuovoArray2 = sublistForeach(array, 1, 3);
// console.log(nuovoArray);
// console.log(nuovoArray2);
// console.log(raddoppio(nuovoArray2));