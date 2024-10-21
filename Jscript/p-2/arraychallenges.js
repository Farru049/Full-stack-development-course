// first challenge
let teaFlavors=['green tea','black tea','oolong tea']

//Accessing First Element
let firstTea=teaFlavors[0]

// console.log(firstTea)


//  Second Challenge

let cities = ['London', 'Tokyo','Paris', 'New York'];

//Accessing Third Element

const favoriteCity=cities[2];

// console.log(favoriteCity)

//  Third Challenge

let teaTypes = ['Herbal tea', 'white tea','masala chai'];


//modifying 1st Element
teaTypes[1]='jasmine tea';

// console.log(teaTypes[1])


// Fourth Challenge-push method
let citiesVisited = ['Mumbai', 'Sydney','Saudi Arabia']


//modifying 1st Element

citiesVisited.push('Berlin')
// console.log(citiesVisited)

// Five Challenge-pop method

let teaOrders = ['chai', 'iced tea','earl grey','matcha'];

let lastel=teaOrders.pop();

// console.log(lastel);

// console.log(teaOrders);

 
//Sixth-Softcopy

// first method-spread operator

let popularTeas = ['green tea', 'oolong tea','chai'];

const SoftcopyTeas =[...popularTeas]
console.log('First Method: ');
console.log(SoftcopyTeas);

//second method
//using slice() method

let popularTea = ['green tea', 'oolong tea','chai'];

const SoftcopyTea =popularTea.slice();
console.log('Second Method: ');
console.log(SoftcopyTea);



let popularTeas1 = ['green tea', 'oolong tea','chai'];

const SoftcopyTeas1 =Array.from(popularTeas1);
console.log('Third Method: ');
console.log(SoftcopyTeas1);



//Seventh Challenge
console.log('Merging two arrays: ')
let europeancities = ['Paris','Rome'];
let asiancities = ['Tokyo','Bangkok'];
const newcitie=europeancities.concat(asiancities);

console.log(newcitie)
