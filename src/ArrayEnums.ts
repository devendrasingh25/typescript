
// Arrays
const ChaiFlavour: string[] = ["Masala", "Adrak"];
const ChaiPrices: number[] = [10, 20];

// Generic array syntax
const rating: Array<number> = [4.5, 5];


// Array of objects
type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "Masala", price: 10 },
    { name: "Adrak", price: 20 }
];


// Readonly array
const cities: readonly string[] = ["Delhi", "Jaipur"];

// Error: readonly arrays cannot be modified
// cities.push("Kota");


// 2D Array
const d: number[][] = [
    [4, 5, 6],
    [7, 8, 9]
];


// Tuple - fixed number and order of values
let chaiTuple: [string, number] = ["Masala", 100];

chaiTuple = ["Masala", 100];


// Optional tuple element
let userInfo: [string, number, boolean?];

userInfo = ["Zoro", 3];
userInfo = ["Zoro", 3, true];


// Named tuple
const chaiItem: [name: string, price: number] = [
    "Masala",
    100
];


// Enum
enum CupSize {
    SMALL,
    LARGE,
    MEDIUM
}

const size = CupSize.LARGE;

console.log(size); // 1

