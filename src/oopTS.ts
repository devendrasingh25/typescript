
// 1. CLASS AND OBJECT

class Branch {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const branch = new Branch("Computer Science");

console.log(branch.getName());
// new Branch("Computer Science") creates an object
// branch.getName() calls the method


// 2. ENCAPSULATION
// private members cannot be accessed directly outside the class

class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount();

account.deposit(500);
console.log(account.getBalance());

// Error:
// account.balance;


// 3. INHERITANCE
// Child class inherits properties and methods from parent class

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} is barking`);
    }
}

const dog = new Dog("Tommy");

dog.eat();
dog.bark();


// 4. METHOD OVERRIDING
// Child class provides its own implementation

class Vehicle {
    move(): void {
        console.log("Vehicle is moving");
    }
}

class Car extends Vehicle {
    override move(): void {
        console.log("Car is moving");
    }
}

const car = new Car();
car.move();


// 5. POLYMORPHISM
// Same method behaves differently for different objects

class Cat extends Animal {
    override eat(): void {
        console.log(`${this.name} is eating fish`);
    }
}

const animals: Animal[] = [
    new Dog("Tommy"),
    new Cat("Kitty")
];

animals.forEach(animal => animal.eat());


// 6. ABSTRACTION
// Abstract class provides a common structure
// but cannot be directly instantiated

abstract class Chai {
    abstract prepare(): void;

    serve(): void {
        console.log("Chai is served");
    }
}

class MasalaChai extends Chai {
    prepare(): void {
        console.log("Preparing Masala Chai");
    }
}

const chai = new MasalaChai();

chai.prepare();
chai.serve();


// 7. INTERFACE
// Defines a contract that a class must follow

interface Drink {
    name: string;
    price: number;

    serve(): void;
}

class Coffee implements Drink {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    serve(): void {
        console.log(`${this.name} served for ₹${this.price}`);
    }
}

const coffee = new Coffee("Cold Coffee", 120);
coffee.serve();


// 8. ACCESS MODIFIERS

class User {
    public name: string;
    private password: string;
    protected age: number;

    constructor(name: string, password: string, age: number) {
        this.name = name;
        this.password = password;
        this.age = age;
    }

    getPassword(): string {
        return this.password;
    }
}

const user = new User("Zoro", "1234", 21);

console.log(user.name); // public
console.log(user.getPassword());

// private:
// user.password;

// protected:
// user.age;


// 9. GETTER AND SETTER

class Person {
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        }
    }
}

const person = new Person();

person.age = 21;
console.log(person.age);


// 10. STATIC MEMBERS
// Belongs to the class rather than an object

class MathUtil {
    static PI: number = 3.14;

    static square(num: number): number {
        return num * num;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));


// 11. CONSTRUCTOR PARAMETER PROPERTIES
// TypeScript shortcut for declaring and assigning properties

class Student {
    constructor(
        public name: string,
        private rollNo: number
    ) {}

    getRollNo(): number {
        return this.rollNo;
    }
}

const student = new Student("Devendra", 391);

console.log(student.name);
console.log(student.getRollNo());

