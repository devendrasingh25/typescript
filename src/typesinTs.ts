// TypeScript Data Types

// Number
let age: number = 21;
console.log("Age:", age);

// String
let name: string = "Devendra";
console.log("Name:", name);

// Boolean
let isStudent: boolean = true;
console.log("Is Student:", isStudent);

// Array
let marks: number[] = [80, 85, 90];
console.log("Marks:", marks);

// Tuple
let student: [string, number] = ["Devendra", 21];
console.log("Student:", student);

// Object
let user: { name: string; age: number } = {
    name: "Devendra",
    age: 21
};
console.log("User:", user);

// Union
let id: number | string = 101;
console.log("ID:", id);

id = "USER101";
console.log("Updated ID:", id);

// Any
let value: any = 10;
value = "Hello";
console.log("Any:", value);

// Unknown
let data: unknown = "TypeScript";
console.log("Unknown:", data);

// Null
let empty: null = null;
console.log("Null:", empty);

// Undefined
let result: undefined = undefined;
console.log("Undefined:", result);