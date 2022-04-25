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


// #4 generate random array based on user input
const generateRandom = (charactersArray, selectNum) => {
    let result = new Array(selectNum), len = charactersArray.length, selected = new Array(len)
    if (selectNum > len) {
        throw new RangeError("more elements selected than available")
    } 

    while (selectNum--) {
       // x = random number between 1 and 92
        let x = Math.floor(Math.random() * len)
        // array[8] = characters array[]
        result[selectNum] = charactersArray[x in selected ? selected[x] : x]
        selected[x] = --len in selected ? selected[len] : len
    }
    
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



// #9 get the password generate button
const generateBtn = document.querySelector(".generate-btn")

// #10 array to receive the four possible passwords
let passwordArray = []


const passwordDiv = document.querySelectorAll(".password")


// #11 call the function four times, and push each value into the passWord array.
generateBtn.addEventListener("click", function(){
    passwordArray = []
    for (let i = 0; i < 4; i++) {
        let result = generateRandom(characters, convertToInt)
        passwordDiv[i].innerHTML = result
    }
    
})


let password = document.querySelectorAll(".copy")

let clipboard = new ClipboardJS(password)

clipboard.on("success", function(event) {
    console.info("Action:", event.action)
    console.info("Text:", event.text)
    console.info("Trigger:", event.trigger)

    event.clearSelection()
})

clipboard.on('error', function(event) {
    console.error('Action:', event.action);
    console.error('Trigger:', event.trigger);
});

console.log(ClipboardJS.isSupported());

//let btnOne = document.querySelector(".btn-one")
let toolTipOne = document.querySelector(".tooltip-one")

let buttons = document.querySelectorAll(".copy")
let buttonsArray = [].slice.call(buttons)
console.log(buttonsArray)

let [btnOne, btnTwo, btnThree, btnFour] = buttonsArray

let tips = document.querySelectorAll(".tooltip-text")
let tipsArray = [].slice.call(tips)

let [tooltipOne, tooltipTwo, tooltipThree, tooltipFour] = tipsArray
const handleClick = (toolTip) => {
    
    toolTip.style.visibility = "visible"
    toolTip.style.transition = "all 1s ease"
    setTimeout(() => {
        toolTip.style.visibility = "hidden"
    }, 2000)
}


 btnOne.addEventListener("click", () => handleClick(tooltipOne))
 btnTwo.addEventListener("click", () => handleClick(tooltipTwo))
 btnThree.addEventListener("click", () => handleClick(tooltipThree))
 btnFour.addEventListener("click", () => handleClick(tooltipFour))

