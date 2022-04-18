// #1 empty array receives all possible characters
let characters = []

// #2 push all characters into array
for (let i = 32; i < 127; i++) {
    characters.push(String.fromCharCode(i))
}

// #3 remove whitespace
characters.shift()

// #4 generate random array based on user input
const generateRandom = (randomChar, length) => {
    return new Array(length).fill().map(() => randomChar[Math.floor(Math.random() * randomChar.length)]).join("")
}

// #5 make variable global so it's accessible by click function
// and set a default value
let convertToInt = 8


// #6 get the select box
const selectInput = document.getElementById("selected-number")

// #7 take the selected value, convert to an integer
selectInput.addEventListener("change", function() {
    const inputValue = selectInput.options[selectInput.selectedIndex].value
    convertToInt = parseInt(inputValue)
})



// #9 get the password generate button
const generateBtn = document.getElementById("generate-btn")

// #10 array to receive the four possible passwords
let passwordArray = []


passwordOne = document.querySelector(".password-one")
passwordTwo = document.querySelector(".password-two")
passwordThree = document.querySelector(".password-three")
passwordFour = document.querySelector(".password-four")

// #11 call the function four times, and push each value into the passWord array.
generateBtn.addEventListener("click", function(){
    passwordArray = []
    for (let i = 0; i < 4; i++) {
        passwordArray.push(generateRandom(characters, convertToInt))
    }
    console.log(passwordArray)
    passwordOne.setAttribute("class", "password-visible")
    passwordOne.textContent = passwordArray[0]


    passwordTwo.setAttribute("class", "password-visible")
    passwordTwo.textContent = passwordArray[1]


    passwordThree.setAttribute("class", "password-visible")
    passwordThree.textContent = passwordArray[2]

    
    passwordFour.setAttribute("class", "password-visible")
    passwordFour.textContent = passwordArray[3]
})

// #8 function to reset select box value to default.
const resetBtn = document.getElementById("reset-btn").addEventListener("click", function(){
    selectInput.selectedIndex = 0
    passwordOne.textContent = ""
    passwordOne.classList.remove("password-visible")


    passwordTwo.textContent = ""
    passwordTwo.classList.remove("password-visible")


    passwordThree.textContent = ""
    passwordThree.classList.remove("password-visible")


    passwordFour.textContent = ""
    passwordFour.classList.remove("password-visible")
})


// #12


