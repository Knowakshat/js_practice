//Ways to print in JavaScript
//alert("Hey there! Go Study Stupid!")
document.write("This is a doccument.write statement")
console.log("Hello World")

//JavaScript Console API
console.warn("I Herby Warn you!")
console.error("This is an error")

/*multi 
line 
comment*/

//JavaScript Variables
//Containers to store data values

var num1 = 69
var numb2 = 96
console.log(num1 + numb2)

//data types in javascript
//Numbers

var no1 = 88
var no2 = 99

//String
var str1 = " This is not a string"
var str2 = 'Is this a string?'

//Objects
var marks = {
    Akshat: 99.99,
    NotAkshat: 0.01,
    SecondAkshat: 98,

}

console.log(marks)
console.log(str1, str2)

//Booleans
var a = true
var b = false
console.log(a, b)

//undefined
var und = undefined //var und (also means undefined)
console.log(und)

//null
var n = null
console.log(n)

//Array
// At a very high level there are two types of data types in js. 
// 1. Primitive Data types: SVGAnimatedNumberList, string, Boolean, undefined, null and Symbol.
// 2. Reference Data types: Arrays and Objects

// ARRAY
var arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[1])
var arrstr = [1, 2, 'Raju', 3, 4, 5]
console.log(arrstr)
console.log(arrstr[2])
console.log(arrstr[3])

//OPERATORS IN JAVA SCRIPT

var x = 1
var y = 2

// artithmetic operators
console.log("value of x + y is", x + y)
console.log("value of x - y is", x - y)
console.log("value of x * y is", x * y)
console.log("value of x / y is", x / y)

// assignment operators
var z = x
// z += 2 // c = c + 2 i.e 1 + 2
// z -= 2
// z *= 2
// z /= 2
console.log(z)

// comparision operators
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x > y)
console.log(x < y)

// logical operators

//AND &&
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(true && false)

//OR ||
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(true || false)

// NOT !
console.log(! true)
console.log(!false)

// Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2
}
c1 = avg(4, 6)
c2 = avg(9, 10)
console.log(c1, c2)
// DRY = DON'T REPEAT YOURSELF

// Conditionals in JavaScript
// If Statement
var height = 5.1
if (height < 5.8) {
    console.log('Hey Shawty')
}

// If Else Statement
var age = 51
if (age > 18) {
    console.log("You can Drive")
}
else {
    console.log("Grow up kiddo")
}

// If-Else Ladder
if (age > 30) {
    console.log("Hello Uncle")
}
else if (age > 18) {
    console.log("Hello Bhaiya")
}
else if (age < 18) {
    console.log("Hello Bacche")
}
else {
    console.log("Idk")
}
console.log('End Of Ladder')

// Loops In JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr)
//For loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('Loop Ended')

//While Loop 
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++
}

// Do While Loop
var k = 0
do {
    console.log(arr[k])
    k++
} while (k < arr.length)

//Break Statement
for (var br = 0; br < arr.length; br++) {
    //console.log(arr[br])
    if (br == 2) {
        break
    }
    console.log(arr[br])
}

//Continue Statement
for (var br = 0; br < arr.length; br++) {
    if (br == 2) {
        continue
    }
    console.log(arr[br])
}

//More Array Methods
let myArr = ["Sring", 99, null, true]

console.log(myArr.length)
myArr.pop() //removes last element of an array
console.log(myArr)
myArr.push("Ajax") //adds elements at the end of an array
console.log(myArr)
myArr.shift() //Removes first element of an array
console.log(myArr)
//myArr.unshift("Ajax") //Replaces last element with first element

//String Methods in JavaScript
let MyStr = "Me and my Str are the best best best"
console.log(MyStr.length)
console.log(MyStr.indexOf("best")) // Findnig the index of a specific word
console.log(MyStr.lastIndexOf("best")) // Findnig the index of a reoccuring word
console.log(MyStr.slice(1.10)) // Finding the chacters from a specific index to a specific index
console.log(MyStr.replace("Str", "String")) // Finding a string and replacing it

//Dates in JavaScript
let mydate = new Date()
console.log(mydate)
console.log(mydate.getTime())
console.log(mydate.getFullYear())
console.log(mydate.getDay())
console.log(mydate.getMinutes())
console.log(mydate.getHours())

// DOM Manipulation
//Document.getelementbyid

let elem = document.getElementById('click') //Getting Element by ID
console.log(elem)

let elemClass = document.getElementsByClassName("container") //Getting element by Class
console.log(elemClass)
// elemClass[0].style.background = "yellow" //Fetching element and customizing its background
elemClass[0].classList.add("bg-primary") //Adding a new class in index.html and merging it with the ElemClass element
elemClass[0].classList.add("text-success")

console.log(elem.innerHTML) // Used to fetch HTML Content of an Element
console.log(elem.innerText) // Used to fetch Text Content of an Element
console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innerText)

//Getting Element by Tag Name
tn = document.getElementsByTagName('div')
console.log(tn)

//Creating a child element

createdElement = document.createElement('p')
createdElement.innerText = "this is a paragraph created with child element"
tn[0].appendChild(createdElement)

//Replacing a child Element
createdElement2 = document.createElement('b')
createdElement2.innerText = "this is a paragraph created with child element in bold"
tn[0].replaceChild(createdElement2, createdElement)

//Removing a child Element
//removeChild(element)


//Selecing using Query
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)

//Events in JavaScript
function clicked() {
    console.log('The button was clicked')
}
window.onload = function () {
    console.log('The document was loaded')
}

firstContainer.addEventListener('click', function () {
    console.log("The container was Clicked")
})