
// Object type
let tea: {
    name: string;
    price: number;
    IsHot: boolean;
};

tea = {
    name: "masala",
    price: 150,
    IsHot: true
};


// Structural typing
type Cup = {
    size: string;
};

let smallCup: Cup = {
    size: "200ml"
};

let bigCup = {
    size: "500ml",
    material: "steel"
};

// Allowed because bigCup has all properties required by Cup
smallCup = bigCup;


// Nested object types
type Item = {
    name: string;
    quantity: number;
};

type Address = {
    street: string;
    pin: number;
};

type Order = {
    name: string;
    Items: Item[];
    address: Address;
};


// Partial<T> - makes all properties optional
type Chai = {
    name: string;
    price: number;
    IsHot: boolean;
};

const UpdateChai = (updates: Partial<Chai>) => {
    console.log("Updating the Chai with", updates);
};

UpdateChai({ price: 25 });
UpdateChai({ IsHot: true });
UpdateChai({});


// Pick<T, K> - selects specific properties
type ChaiPreview = Pick<Chai, "name" | "price">;

const preview: ChaiPreview = {
    name: "Masala Chai",
    price: 150
};


// Required<T> - makes all properties required
type OptionalChai = {
    name?: string;
    price?: number;
    IsHot?: boolean;
};

const completeChai: Required<OptionalChai> = {
    name: "Ginger Chai",
    price: 120,
    IsHot: true
};

