// Q1)Create an Array
 //Create an array with five numbers and print it
 arr=[0,1,2,3,4]
 console.log(arr)
//Q2) Access an Element
//Given an array, print the third element.
var num=[1,2,3,4,5]
console.log(num[2])
//Q3) Change an Element
//Modify the second element of an array to a new value.
var value=[9,8,7,6,5]
console.log(`Before modification of values:${value}`)
value[1]=10
console.log(`After modifying the value:${value}`)
//Q4) Find Length
 //Write a function that returns the length of an array.
 var elements=['Apple',"mango",1,7,5]
 console.log(elements.length)
 //Q5) Add an Element (Push)
 //Add a new element to the end of an array
 var add=[1,3,5,7]
 console.log(`Before adding a new element:${add}`)
 add[4]=9
 console.log(`After adding the new element:${add}`)
 //Q6). Remove the Last Element (Pop)
 //Remove the last element from an array and print the updated array.
 var rem=[11,12,13,4,5,7]
 console.log(`Before removing the element:${rem}`)
 rem.pop()
 console.log(`After removing the last element:${rem}`)
 //Q7) 7. Loop Through an Array
 //Use a loop to print each element of an array.
 arr=['apple','mango','watermelon']
for(i=0;i<=arr.length-1;i++)
{
    console.log(arr[i])
}
//Q8) Check if an Element Exists
 //Write a function to check if a given value exists in an array.
 arr=['Html','CSS','python']
 console.log(arr.includes('java'))
 console.log(arr.includes('CSS'))
 //Q9) Copy an Array
 //Create a copy of an array and print it.
 original=[1,2,3,4]
 copy=original
 console.log(copy)
 //10). Convert Array to String
 //Convert an array to a string using .join() and print the result
 var array = ['Hello', 'I am ', 'AI']
 console.log(array)
var result = array.join(' ')
console.log(result)

