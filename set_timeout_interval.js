
// Arrow Functions
//normal  function eg
function summ(a, b) {
    return a + b;
}

//arrow function eg
summ = (a, b) => {
    return a + b
}

// Set Timeout and Set Interval
//use clearInterval/clearTimeout to cancel setInterval/setTimeout

logIt = () => {
    document.querySelectorAll(.container)[1].innerHTML = "<b> Set Interval Fired"
    console.log("I am your Log")
}
//Set Timeout
setTimeout(logIt, 2000)