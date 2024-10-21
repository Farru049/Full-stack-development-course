// //first

// let sum=0;

// let i=1;

// while(i<=5){
//     sum = sum + i;
//     i+=1
// }

// console.log(sum);

// //DO While Loop

// let total=0;
// let k=1;
// do{
//     total+=k;
//     k+=1;
// } while(k<=8);
// console.log(total)

// //for loop

// let multiplynums=[]

// let nums=[2, 4, 6]


// //exercise
// let arr = ['green tea', 'black tea', 'chai', 'oolong tea'];
// const newarr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'chai') {
//         break;
//     }
//     newarr.push(arr[i]);
// }

// console.log(newarr);
    

// //exercise
// let cities = ['London', 'New York', 'Paris', 'Berlin'];
// const visitedCities = [];

// for (let i = 0; i < arr.length; i++) {
//     if (cities[i] === 'Paris') {
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }

// console.log(visitedCities);

// //for-of loop

// let teaTypes = ['chai', 'green tea', 'herbal tea', 'black tea'];

// let preferredTeatypes = [];

// for (const tea of teaTypes){
//     if (tea === 'herbal tea'){
//         continue;
//     }
//     preferredTeatypes.push(tea)
// }
// console.log(preferredTeatypes)


// 
// let citiesPopulation = {
//     'London': 89000,
//     'New York': 90000,
//     'Paris': 78000,
//     'Berlin': 92000
// };
// let newCityPopulations = {};

// for (const city in citiesPopulation) {
//     if (city === 'Berlin') {
//         break;
//     }
//     newCityPopulations[city] = citiesPopulation[city];
// }

// console.log(Object.values(newCityPopulations));



// let myWorldCites = ['Berlin', 'Tokyo', 'Sydney', 'Paris'];

// let traveledCities=[];

// myWorldCites.forEach(city=>{
//     if (city === 'Sydney'){
//         return;
//     }
//     traveledCities.push(city)
// })
// console.log(traveledCities)

let nums = [2, 5, 7, 9];

let doubleNumbers = [];

for (const num of nums) {
    if (num === 7) {
        continue; 
    }
    doubleNumbers.push(num * 2);
}

console.log(doubleNumbers);
