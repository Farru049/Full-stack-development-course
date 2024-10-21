// Logical Operators in JavaScript

// && -> AND
// || -> OR
// ! -> NOT (reverse)

// AND Operation Demonstration
let isAssignmentClear = true;  // Assignment status
let isInterviewClear = false;   // Interview status

// Checks if both conditions are true
console.log(isAssignmentClear && isInterviewClear); // Outputs: false
// Explanation: The result is false because not both conditions are true (one is false).

// OR Operation Demonstration
let isCIBILGood = true;        // CIBIL score status
let isRepaymentGood = false;   // Repayment status

// Checks if at least one condition is true
console.log(isCIBILGood || isRepaymentGood); // Outputs: true
// Explanation: The result is true because at least one of the conditions is true.
