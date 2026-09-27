// Type and class
type Chai = {
    water: number;
    milk: number;
};

class ChaiOrder implements Chai {
    water = 100;
    milk = 50;
}

const chai = new ChaiOrder();
console.log("Chai:", chai);


// Union type
interface CupSize {
    size: "small" | "large";
}

class Final implements CupSize {
    size: "small" | "large" = "large";
}

const cupSize = new Final();
console.log("Size:", cupSize.size);


// Intersection type
type BaseChai = {
    teaLeaves: number;
};

type Extra = {
    masala: number;
};

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 100,
    masala: 1
};

console.log("Masala Chai:", cup);


// Optional property
type User = {
    username: string;
    bio?: string;
};

const u1: User = {
    username: "Devendra"
};

const u2: User = {
    username: "Devendra",
    bio: "SDE"
};

console.log("User 1:", u1);
console.log("User 2:", u2);


// Readonly property
type Product = {
    readonly id: number;
    name: string;
};

const product: Product = {
    id: 101,
    name: "Laptop"
};

console.log("Product:", product);

// product.id = 102; // Error