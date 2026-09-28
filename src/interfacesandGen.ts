
// Interface
interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Yogesh"
};

// Error: readonly property cannot be changed
// s.id = 2;


// Interface for a function
interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => {
    return p * 0.5;
};

console.log(apply50(100)); // 50


// Interface with methods
interface TeaMachine {
    start(): void;
    stop(): void;
}

const tea: TeaMachine = {
    start() {
        console.log("Start");
    },

    stop() {
        console.log("Stop");
    }
};

tea.start();
tea.stop();


// Generics
// T can represent any type

function wrapInArray<T>(item: T): T[] {
    return [item];
}

console.log(wrapInArray("Masala"));
console.log(wrapInArray(42));


// Multiple generic types
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

console.log(pair("Masala", 30));
console.log(pair(true, "Hot"));


// Generic interface
interface Box<T> {
    content: T;
}

const numberBox: Box<number> = {
    content: 100
};

const stringBox: Box<string> = {
    content: "Masala Chai"
};

console.log(numberBox);
console.log(stringBox);

