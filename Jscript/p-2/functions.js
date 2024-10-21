function greet(name){
    console.log(`Hello ${name}`);
}
greet('Ali')

//First Exercise

function makeTea(typeOftea){
    return `Making ${typeOftea}`;
}
let teaOrder=makeTea('Lemon tea')
console.log(teaOrder)

// Second Exercise

function orderTea(typet){
    function confirmorder(){
        return `Order Confirmed for chai`;
    }
    return confirmorder()
}

// Arrow Functions- Javascript

const calculatetotal = (price, quantity)=> price * quantity;

let totcnt=calculatetotal(22, 2);

console.log(totcnt)

//Another one

function createTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker();
console.log(teaMaker('Black tea'));