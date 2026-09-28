
// Function with parameters
function MakeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type} chai`);
}

MakeChai("Masala", 2);


// Function with return type
function OrderChai(): number {
    return 25;
}

const price = OrderChai();
console.log("Chai price:", price);


// Function with void return type
function LogChai(): void {
    console.log("Chai is ready");
}

LogChai();

