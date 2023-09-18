console.log('veikia')

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
// 4.2. Tik tekstą (string tipo duomenis).
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

let newArr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'] 

// 4.1. Tik skaičius (number tipo duomenis).

console.log(newArr)

// for (let i = 0; i < newArr.length; i++) {
//     // console.log(newArr[i])

//     let item = newArr[i]
//     if (!isNaN(item)) {
//         console.log(item)
//     }
// }

// newArr.map(item => {
//     if (!isNaN(item)) {
//         console.log(item)
//     }
// })

// newArr.forEach(item => {
//     if(!isNaN(item)) {
//     console.log(item)
//     }
// })

// 4.2. Tik tekstą (string tipo duomenis).

// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i]
//     if (isNaN(item)) {
//         console.log(item)
//     }
// }

// newArr.map(item => {
//     if(isNaN(item)) {
//         console.log(item)
//     }
// })

// newArr.forEach(item => {
//     if(isNaN(item)) {
//         console.log(item)
//     }
// })

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i]
//     let output = Math.pow(item, 4)
    
//     if (!isNaN (item)) {
//         console.log(output)
//     }
// }
// newArr.map(item => {
//     let output = Math.pow(item, 4)
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// newArr.forEach(item => {
//     let output = Math.pow(item,4)
//     if (!isNaN(item)) {
//         console.log(output)
//     }
// })

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i]
//     let output = item + 55

//     if (!isNaN(item)) {
//         console.log(output)
//     }
// }

// newArr.map(item => {
//     let output = item + 55
//     if (!isNaN(item)) {
//         console.log(output)
//     }
// })

// newArr.forEach(item => {
//     let output = item + 55
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

// for (let i = 0; i < newArr.length; i++){
//     let item = newArr[i]
//     let output = item / 2
//     if (!isNaN(item)) {
//         console.log(output)
//     }
// }

// newArr.map(item => {
//     let output = item / 2
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// newArr.forEach(item => {
//     let output = item / 2
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i]
//     let output = `Number: ${item}`
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// }

// newArr.map(item => {
//     let output = `Number: ${item}`
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// newArr.forEach(item => {
//     let output = `Number: ${item}`
//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i]
//     let output = `Index: ${[i]}, Number: ${item}`

//     if(!isNaN(item)) {
//         console.log(output)
//     }
// }

// newArr.map(function(item, index) {
    
//     let output = `Index: ${[index]}, Number: ${item}`

//     if(!isNaN(item)) {
//         console.log(output)
//     }
// })

// newArr.forEach(function(item,index) {

// let output = `Index: ${index}, Number: ${item}`

// if (!isNaN(item)) {
//     console.log(output)
// }
// })

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

// for (let i = 0; i < newArr.length; i++){
//     let item = newArr[i]
//     let output = item * i 

//     if(!isNaN(item)){
//         console.log(output)
//     }
// }

// newArr.map(function(item, index) {
//     let output = item * index
//     if (!isNaN(item)){
//     console.log(output)
// }
// })

// newArr.forEach(function(item, index) {
//     let output = item * index
//     if (!isNaN(item)){
//         console.log(output)
//     }
// })

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

// let arrayNums = newArr.filter(function (num) {
//   return typeof num === "number";
// });

// console.log(arrayNums);

// for (let i = 0; i < arrayNums.length; i++) {
//   let item = arrayNums[i];
//   let previousNum = arrayNums[i - 1];
//   if (i > 0) {
//     console.log(item * previousNum);
//   }
// }

// arrayNums.map(function (item, i) {
//   let previousNum = arrayNums[i - 1];
//   if (i > 0) {
//     console.log(item * previousNum);
//   }
// });

// arrayNums.forEach(function (item, i) {
//   let previousNum = arrayNums[i - 1];
//   if (i > 0) {
//     console.log(item * previousNum);
//   }
// });


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// let arrayNums = newArr.filter(function (num) {
//   return typeof num === "number";
// });

// console.log(arrayNums);

// for (let i = 0; i < arrayNums.length; i++) {
//     let item = arrayNums[i]

//     if (item * 5 > 350) {
//         console.log(item)
//     }
// }

// arrayNums.map(function(item, i) {

//     if (item * 5 > 350) {
//         console.log(item)
//     }
// })

// arrayNums.forEach(function(item, i) {

//     if (item * 5 > 350) {
//         console.log(item)
//     }
// })

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// let arrayStr = newArr.filter(function (item) {
//   return typeof item === 'string'
// })

// console.log(arrayStr)

// for (let i = 0; i < newArr.length; i++) {

// let item = newArr[i]
// let length = newArr[i].length

// if (isNaN(item)) {
//     console.log(`${item} has ${length} symbols.`)
// }
// }

// newArr.map (item => {
  
//     let length = item.length

// if (isNaN(item)) {
//     console.log(`${item} has ${length} symbols.`)
// }
// })

// newArr.forEach (item => {
  
//     let length = item.length

// if (isNaN(item)) {
//     console.log(`${item} has ${length} symbols.`)
// }
// })

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

// for (let i = 0; i < newArr.length; i++) {
//   let item = newArr[i];
//   if (isNaN(item)) {
//     console.log(item.toUpperCase().split("").join("-"))
//   }
// }

// newArr.map(item => {
//   if (isNaN(item)) {
//     console.log(item.toUpperCase().split("").join("-"))
//   }
// });

// newArr.forEach(item => {
//   if (isNaN(item)) {
//     console.log(item.toUpperCase().split("").join("-"))
//   }
// })

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// for (let i = 0; i < newArr.length; i++) {
//     let item = newArr[i];
//     if (isNaN(item)) {
//         console.log(item.underscore().replace('_'))
//     }
// }  

for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr [i] === 'string') {
    let newString = newArr [i].replace(/./g, (char, index) => (index === 0 || index === 2) ? '_' : char);
    console.log(newString);
    }
}


// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";

for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === 'string') {
    console.log(newArr[i].split('').reverse().join(''));
    }
}

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".