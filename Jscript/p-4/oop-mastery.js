class BankAccount {
    // Private property to hold the balance
    #balance = 76000; // Using a private field (denoted by #)

    // Method to deposit an amount into the account
    deposit(amount) {
        if (amount > 0) { // Check for valid deposit amount
            this.#balance += amount; // Update the balance
            return this.#balance; // Return the new balance
        } else {
            throw new Error("Deposit amount must be positive."); // Error handling
        }
    }

    // Method to retrieve the current balance
    getBalance() {
        return `$ ${this.#balance}`; // Return balance formatted as currency
    }
}

// Creating an instance of BankAccount
let account = new BankAccount();

// Accessing the balance using the public method
console.log(account.getBalance()); // Output: $ 76000

// Depositing money and checking the new balance
console.log(account.deposit(5000)); // Output: 81000
console.log(account.getBalance()); // Output: $ 81000

// Uncommenting the following line will throw an error because #balance is private
// console.log(account.#balance); 