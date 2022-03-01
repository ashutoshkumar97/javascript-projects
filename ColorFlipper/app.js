// just for demonstration, using simple array with indices 0-3
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get button element and color span
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event listener to the button with anonymous function
btn.addEventListener("click", function () {
    // every time a button is clicked, background colour of body will be changed
    // body is a property on a document object
    // document.body
    // get a random number between 0 and 3
    // multiply it by arrays length and floor it
    const randomNumber = getRandomNumber();//callback to function
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function to get random number
function getRandomNumber() {
    // but it will generate numbers from 0 - 0.99999....
    return Math.floor(Math.random() * colors.length);
}
