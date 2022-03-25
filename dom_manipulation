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

//Click
function clicked() {
    console.log('The button was clicked')
}

//Window On Load
window.onload = function () {
    console.log('The document was loaded')
}

//Click On Container
firstContainer.addEventListener('click', function () {
    console.log("The container was Clicked")
})

//Mouse On Container
firstContainer.addEventListener('mouseover', function () {
    console.log("Mouse On Container")
})

//Mouse Out Of Container
firstContainer.addEventListener('mouseout', function () {
    console.log("Mouse out of container")
})

//Mouse Out Of Container
firstContainer.addEventListener('mouseup', function () {
    console.log("Mouse up when clicked on container")
})

//Mouse Out Of Container
firstContainer.addEventListener('mousedown', function () {
    console.log("Mouse down when clicked on container")
})

//Text Change on CLick
firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Mouse Clicked"
    console.log("The container was Clicked")
})


//Text change on mouse click up and down
let prevHTML = document.querySelectorAll('.container')[1].innerHTML

firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Mouse Clicked"
})


firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML
})