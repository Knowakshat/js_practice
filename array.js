function runArrays() {
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
}





module.exports = { runArrays }