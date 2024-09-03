const calculatorElm = document.getElementById("calculator")
const headerElm = document.getElementById("header")
const soundEffect = document.getElementById("IJDUW")
const calculatorButtons = calculatorElm.getElementsByTagName("button")

let hitEqual = false

// this loops trough the buttons of the calculator and assigns everyone the same onclick function
for (let i = 0; i < calculatorButtons.length; i++) {
    const button = calculatorButtons[i]

    button.onclick = function() {
        if (button.innerHTML === "AC") {
            headerElm.innerHTML = ""
            return
        }
        else if (button.innerHTML === "=") {
            hitEqual = true
            headerElm.innerHTML = eval(headerElm.innerHTML)
            return
        }
        else if (button.innerHTML === "IJDUW") {
            soundEffect.play()
            return
        }

        if (hitEqual) {
            headerElm.innerHTML = ""
            hitEqual = false
        }
        
        headerElm.innerHTML = headerElm.innerHTML + button.innerHTML
    }
}