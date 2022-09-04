let thisisnumber: number = 78;
console.log("this is a number here", thisisnumber);

const fullName: string = "RahulThakur";
console.log(fullName.toLowerCase())


//union type  : means we can change the type of value later we we need
//syntax to write union type 
let age: number | string = 18;
console.log("value is now a number", age, typeof (age));
age = '178';
console.log("age is now a string", age, typeof (age));


// Declaration of  Array in the typeScript 
// we can specifies what type of value an aray contain

let allNumbers: number[];
let allString: string[];
let allBoolean: boolean[];
let allUndefined: undefined[];
let allObject: object[];
let allBigInt: bigint[];
let allNull: null[];
let anyThing: any[];

// Assign values 
// throws  an error if we assing some other value accept  the type we specifies 


allNumbers = [1, 2, 3, 4, 5, 6];
allString = ["hey ", "user", "only", "string", "here"];
allBoolean = [true, false, true, false, true];
allUndefined = [undefined, undefined, undefined];
allObject = [{}, {}, function() { }, []]// because function is also type of object and array also type of obejct
allBigInt = [100n, 20n, 1000n];
allNull = [null, null, null, null];
anyThing = [1, 23, "any type of value", {}, [], undefined, null];


// Specifes array value by usign a Union 
// if we want to specifies multiple type of values can be used . if we want to specfies only these type value can be used
let randomArray: (string | number | boolean)[];
randomArray = ["hey  ", "user", "only", "string", "number", "boolean", "here", 1, 2, 3, true, false];


//OBJECTS IN THE TYPESCRIPT

//we can declare an object like this 

let obj: {
  firstName: string,
  lastName: string,
  fullName: string,
  age: number
}

// can have properties same as mentioned above
// this object can,t have more properties mentioned then above object

obj = {
  firstName: "Rahul",
  lastName: "Thakur",
  fullName: "Rahul Thakur",
  age: 20
}

// we can reassign  the property value but it should be 
//of the same type 

obj.fullName = "Rahul Mandyal";
// obj.fullName = undefined ;// it will throw an error



// INTERFACE WE ALSO DEFINE OBJECT STRUCTURE USING INTERFACE 

interface Person {
  name: string,
  location: string,
  isProgrammer: boolean
}

let personOne: Person = {
  name: "Rahul Thakur",
  location: "dharmshala",
  isProgrammer: true
}

// function declration inside an object 

interface functionStructure {
  sayHello: (name: string) => string;
  addNumber: (numberOne: number, numberTwo: number) => number
}

let objMethods: functionStructure = {
  sayHello: (name) => {
    return `Hello ${name}`
  },
  addNumber: (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
  }
}



// how we declare a function with the TypeScript 
// to Specify parameter we also specifies  the  type of value of parameter
// after the parameter we specifies the type of value it also returns
// Function declaration
function add(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}
console.log("TypeScript Function Declaration", add(3, 4));


//function Expression

const addValues = (numberOne: number, numberTwo: number): void => {
  console.log("TypeScript Function Expression", numberOne + numberTwo);
}

addValues(5, 6);

// To have optional parameters inside a function  we have to write ? sign after that parameter name Example 

const optionalParmsExample = (firstName: string, lastName: string, nickName?: string): string => {
  return ` User fullName is ${firstName + lastName} and nickName is : ${nickName}`;
}

console.log(optionalParmsExample("Rahul", "Thakur"));


//Rest Parameter Implementation 
function restParameterExample(...users: any[]): void {
  users.forEach((user) => {
    console.log(user);
  })
}

restParameterExample("rest", "parms", "example");

//function in the typeScript to find the sum of largest and smallest number

function findSumLargest(...numbers: number[]): number {
  let sortedArr = numbers.sort((a: number, b: number) => a - b);
  return sortedArr[0] + sortedArr[sortedArr.length - 1];
}

console.log(findSumLargest(2, 4, 2, 3, 5, 7, 8));

let thisisnumber: number = 78;
console.log("this is a number here", thisisnumber);

const fullName: string = "RahulThakur";
console.log(fullName.toLowerCase())


//union type  : means we can change the type of value later we we need
//syntax to write union type 
let age: number | string = 18;
console.log("value is now a number", age, typeof (age));
age = '178';
console.log("age is now a string", age, typeof (age));


// Declaration of  Array in the typeScript 
// we can specifies what type of value an aray contain

let allNumbers: number[];
let allString: string[];
let allBoolean: boolean[];
let allUndefined: undefined[];
let allObject: object[];
let allBigInt: bigint[];
let allNull: null[];
let anyThing: any[];

// Assign values 
// throws  an error if we assing some other value accept  the type we specifies 


allNumbers = [1, 2, 3, 4, 5, 6];
allString = ["hey ", "user", "only", "string", "here"];
allBoolean = [true, false, true, false, true];
allUndefined = [undefined, undefined, undefined];
allObject = [{}, {}, function() { }, []]// because function is also type of object and array also type of obejct
allBigInt = [100n, 20n, 1000n];
allNull = [null, null, null, null];
anyThing = [1, 23, "any type of value", {}, [], undefined, null];


// Specifes array value by usign a Union 
// if we want to specifies multiple type of values can be used . if we want to specfies only these type value can be used
let randomArray: (string | number | boolean)[];
randomArray = ["hey  ", "user", "only", "string", "number", "boolean", "here", 1, 2, 3, true, false];


//OBJECTS IN THE TYPESCRIPT

//we can declare an object like this 

let obj: {
  firstName: string,
  lastName: string,
  fullName: string,
  age: number
}

// can have properties same as mentioned above
// this object can,t have more properties mentioned then above object

obj = {
  firstName: "Rahul",
  lastName: "Thakur",
  fullName: "Rahul Thakur",
  age: 20
}

// we can reassign  the property value but it should be 
//of the same type 

obj.fullName = "Rahul Mandyal";
// obj.fullName = undefined ;// it will throw an error



// INTERFACE WE ALSO DEFINE OBJECT STRUCTURE USING INTERFACE 

interface Person {
  name: string,
  location: string,
  isProgrammer: boolean
}

let personOne: Person = {
  name: "Rahul Thakur",
  location: "dharmshala",
  isProgrammer: true
}

// function declration inside an object 

interface functionStructure {
  sayHello: (name: string) => string;
  addNumber: (numberOne: number, numberTwo: number) => number
}

let objMethods: functionStructure = {
  sayHello: (name) => {
    return `Hello ${name}`
  },
  addNumber: (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
  }
}



// how we declare a function with the TypeScript 
// to Specify parameter we also specifies  the  type of value of parameter
// after the parameter we specifies the type of value it also returns
// Function declaration
function add(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}
console.log("TypeScript Function Declaration", add(3, 4));


//function Expression

const addValues = (numberOne: number, numberTwo: number): void => {
  console.log("TypeScript Function Expression", numberOne + numberTwo);
}

addValues(5, 6);

// To have optional parameters inside a function  we have to write ? sign after that parameter name Example 

const optionalParmsExample = (firstName: string, lastName: string, nickName?: string): string => {
  return ` User fullName is ${firstName + lastName} and nickName is : ${nickName}`;
}

console.log(optionalParmsExample("Rahul", "Thakur"));


//Rest Parameter Implementation 
function restParameterExample(...users: any[]): void {
  users.forEach((user) => {
    console.log(user);
  })
}

restParameterExample("rest", "parms", "example");

//function in the typeScript to find the sum of largest and smallest number

function findSumLargest(...numbers: number[]): number {
  let sortedArr = numbers.sort((a: number, b: number) => a - b);
  return sortedArr[0] + sortedArr[sortedArr.length - 1];
}

console.log(findSumLargest(2, 4, 2, 3, 5, 7, 8));

