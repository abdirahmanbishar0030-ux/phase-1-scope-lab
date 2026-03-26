// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer globally
var bestCustomer;

// Function to set best customer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite best customer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare least favorite customer
const leastFavoriteCustomer = "bob";

// Function that should throw an error
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not bob";
}