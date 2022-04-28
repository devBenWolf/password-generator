// #1 empty array receives all characters
let characters = []

// #2 push all characters into array
for (let i = 32; i < 127; i++) {
    characters.push(String.fromCharCode(i))
}

// #3 remove whitespace
characters.shift()
characters.splice(11, 1)
characters.splice(26, 1)


// #4 generate random array
const generateRandom = (charactersArray, selectNum) => {
    let result = new Array(selectNum), len = charactersArray.length, selected = new Array(len)
    // console.log(`I am an array based on length chosen by the user`, result)
    // console.log(`I am the array with all possible characters`, len)
    // console.log(`I am an array the length of the previous array `, selected)
    if (selectNum > len) {
        throw new RangeError("more elements selected than available")
    } 

    while (selectNum--) {
       // x = random number between 1 and 92
        let x = Math.floor(Math.random() * len) 
        // console.log(`I am the random number ${x}.`)      
        result[selectNum] = charactersArray[x in selected ? selected[x] : x] 
        // console.log(`If x is not in selected, ${charactersArray[x]} is pushed into result ${result}`)   
        selected[x] = --len in selected ? selected[len] : len
        // console.log(` if len is not in selected, ${len} is pushed into selected ${selected}`)
    
    }
    // join array into string
    let change = result.join('')
    return change
}

// #5 make variable global so it's accessible by click function
// and set a default value
let convertToInt = 8


// #6 get the select box
const selectInput = document.querySelector(".selected-number")

// #7 take the selected value, convert to an integer
selectInput.addEventListener("change", function() {
    const inputValue = selectInput.options[selectInput.selectedIndex].value
    convertToInt = parseInt(inputValue)
    console.log(convertToInt)
})

// #8 get divs displaying passwords
const passwordDiv = document.querySelectorAll(".password")


// #9 conditionally render tooltips
let isClicked = false


// #10 assign empty array to recieve passwords
let passwordArray = []


// #11 generate passwords and render on page
const generateBtn = document.querySelector(".generate-btn")
generateBtn.addEventListener("click", () => {
    passwordArray = []
    for (let i = 0; i < 4; i++) {
        let result = generateRandom(characters, convertToInt)
        passwordDiv[i].innerHTML = result
    }
    isClicked = true
})


// ****** #12 tooltips ******

// get copy buttons
const buttons = document.querySelectorAll(".copy")

// convert nodelist into array
const buttonsArray = [].slice.call(buttons)

// destructure array
const [btnOne, btnTwo, btnThree, btnFour] = buttonsArray

// repeat for tooltips
const tips = document.querySelectorAll(".tooltip-text")
const tipsArray = [].slice.call(tips)
const [tooltipOne, tooltipTwo, tooltipThree, tooltipFour] = tipsArray

// repeat for password display divs
const passDisplay = document.querySelectorAll(".password")
const passArray = [].slice.call(passDisplay)
const [passOne, passTwo, passThree, passFour] = passArray



// conditionally render tooltips if generator has been called.
const handleClick = (toolTip, isClicked, passDisplay) => { 
    navigator.clipboard.writeText(passDisplay.innerText)
    .then(console.log("copied!!"))
    isClicked ? toolTip.style.visibility = "visible" : toolTip.style.visibility = "hidden"
    setTimeout(() => {
        toolTip.style.visibility = "hidden"
    }, 2000)
}


 btnOne.addEventListener("click", () => handleClick(tooltipOne, isClicked, passOne))
 btnTwo.addEventListener("click", () => handleClick(tooltipTwo, isClicked, passTwo))
 btnThree.addEventListener("click", () => handleClick(tooltipThree, isClicked, passThree))
 btnFour.addEventListener("click", () => handleClick(tooltipFour, isClicked, passFour))

