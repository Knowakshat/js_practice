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