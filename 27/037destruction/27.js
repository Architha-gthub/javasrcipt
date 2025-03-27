//Task 1: Object Destructuring
const person = { 
    name: "John Doe", 
    age: 30, 
    address: { 
    city: "New York", 
    country: "USA" 
    }, 
    hobbies: ["Reading", "Traveling"] 
    }
let{name:fullName,age,address:{city,country=unknown},hobbies}=person
console.log(fullName,age,city,country)
let firstHobby= hobbies[0];
console.log(firstHobby);
//Task 2: Array Destructuring
 const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
 let [fruit1, fruit2, ...rest] = fruits
 let left = [...rest];
 [fruit1, fruit2] = [fruit2, fruit1];
console.log(fruit1, fruit2); 
console.log(left);
 //Task 3: Function with Rest Parameters
 // Write a function 
//sumNumbers that takes an unlimited number of arguments and returns their sum. Use the rest operator inside the function
function sumNumbers(...numbers){
    return (numbers.reduce((sum,next)=>sum+next))
}
console.log(sumNumbers(1, 2, 3, 4))
console.log(sumNumbers(10, 20, 30))
//Task 4: Merging Objects using Spread Operator
const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" }
let profile={...user,...job,Experience:"2 years"}
console.log(profile)
//Task 5: Copy and Modify an Array using Spread Operator
const numbers = [1, 2, 3, 4, 5];
 //1. Create a shallow copy of the numbers array using the spread operator.
 //2. Create a new array that has the same numbers but with 0 added at the beginning and 6 at the end 
 let arr2=[...numbers]
 console.log(arr2)
 let newarr=numbers
 newarr[0]=0
 newarr[5]=6
 console.log(numbers)
 //method2
 let updatedNumbers=[0,...arr2,6]
console.log(updatedNumbers)
//method3
arr2.unshift(0);
arr2.push(6);
 console.log(arr2)