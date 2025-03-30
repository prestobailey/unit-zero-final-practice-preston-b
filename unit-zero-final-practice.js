// Unit 0 Final Practice
// HTML, CSS and JavaScript Website that compares two excel sheets -> The outputs desired data from overhead stock to inbound shipping for product lifecycle.

// Install SheetJS: 
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

// HTML Structure:
// Input element for the file selection: 
// <input type="file" id="file1" />
// <input type="file" id="file2" />
// <button onclick="compareSheets()">Compare</button>
// <pre id="output"></pre>

// <script> JavaScript Beginning

//Task: 3
// Values, Data Types, and Operations
const map1 = mapByStyleColorCode(sheet1); // Overhead Stock Excel Sheet - Style-Color Code FORMAT: AB1234-567
const map2 = mapByStyleColorCode(sheet2); // Inbound Shipping Excel Sheet - Style-Color Code FORMAT: AB1234-567

const map3 = mapTotalQuantity(sheet1); // Overhead Stock Excel Sheet - Total Quantity
const map4 = mapTotalQuantity(sheet2); // Inbound Shipping Excel Sheet - Total Quantity

let colorIndex = ["Red", "Yellow", "Green"]; // Color Correlation of Product
// Stringing Characters Together
let styleCode = mapByStyleColorCode.slice(0, 5); // Style Code: AB123
let colorCode = mapByStyleColorCode.slice(6, 9); // Color Code: 567
// Control Structures and Logic
    function getStatus(mapTotalQuantity) {  // Function to set the status of the product based off of the total quantity
        if (mapTotalQuantity === "Missing") return "N/A";
        return mapTotalQuantity < 32 ? "Clearance" : "Sale Ready";
    }
// Working with Loops
for (let i = 0; i < quantities.length; i++) { // Loop that iterates on the if function, organizing clearance and sale ready items
    let status = getStatus(quantities[i]);
    
    if (status === "Clearance") {
        clearanceItems.push(quantities[i]);
    } else if (status === "Sale Ready") {
        saleReadyItems.push(quantities[i]);
    }
}

console.log("Clearance Items:", clearanceItems);
console.log("Sale Ready Items:", saleReadyItems);
// Building Arrays
let clearanceItems = []; // Array to hold clearance items
let saleReadyItems = []; // Array to hold sale ready items

console.log("Clearance Items:", clearanceItems); // Logs the clearnace items
console.log("Sale Ready Items:", saleReadyItems); // Logs the sale ready items
// Using Arrays
let saleReadyItems = quantities.filter(item => getStatus(item) === "Sale Ready" && item > 32); // Filters sale ready items over 32

console.log("All Sale Ready Items Over 32:", saleReadyItems);  // Logs all sale ready items over 32
// <script> JavaScript Ending