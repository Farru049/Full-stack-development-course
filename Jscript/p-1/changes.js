// Variable declaration using 'let'
let gameName = 'Valorant'; // Initial assignment of a value

// Modifying the value of the variable
gameName = 'PUBG'; // Changing the value of gameName
console.log(gameName); // Outputs: PUBG

// Constant declaration using 'const'
const userName = 'CyberPunk'; // Initial assignment of a constant value

// Attempting to modify the value of a constant
try {
    userName = 'GodofWar'; // This will throw an error
} catch (error) {
    console.error('Error:', error.message); // Outputs an error message
}

// Output the constant value
console.log(userName); // Outputs: CyberPunk
