let lenovo = {
    screen: 'HD',
};

let computer = {
    cpu: 12,
    __proto__: lenovo,
};

let tomHardware = {};

console.log(`computer`, computer.__proto__); // Now this would log the `lenovo` object

// 