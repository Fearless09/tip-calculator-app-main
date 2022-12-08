console.log("fsdfsdf")

//Inputs
let bill = document.getElementById("bill")
let people = document.getElementById("people")
let tip = Array.from(document.querySelector(".tipPercentage").children)


//Display
let tipAmount = document.getElementById("tipAmount")
let total = document.getElementById("total")


//Calculations
function tipCalc(percent, amount, noPeople) {
    return (((percent / 100) * amount) / noPeople)
}

function totalCalc(percent, amount, noPeople) {
    return ((amount / noPeople) + tipCalc(percent, amount, noPeople))
}

console.log("Tip amount / person $" + tipCalc(10, 500, 5))

console.log("Total / person $" + totalCalc(10, 500, 5))



//Functionalities

for (let index = 0; index < tip.length - 1; index++) {
    //console.log(tip[index])

    tip[index].addEventListener('click', () => {
        tipAmount.value = "$" + parseFloat(tipCalc(tip[index].value, bill.value, people.value)).toFixed(2);
        total.value = "$" + parseFloat(totalCalc(tip[index].value, bill.value, people.value)).toFixed(2)
        reset.setAttribute("aria-disabled", false)
        //console.log(reset)
    })
}

tip[5].addEventListener('keyup', () => {
    tipAmount.value = "$" + parseFloat(tipCalc(tip[5].value, bill.value, people.value)).toFixed(2);
    total.value = "$" + parseFloat(totalCalc(tip[5].value, bill.value, people.value)).toFixed(2)
    //console.log(tip[5].value)
})

let notZero = document.querySelector(".notZero")

people.addEventListener('keyup', () => {
    //console.log(people.value)
    if (people.value < 1) {
        notZero.setAttribute("aria-hidden", false)
    } else {
        notZero.setAttribute("aria-hidden", true)
    }
})



//Reset Functionalities
let reset = document.getElementById("reset")
let inputTag = Array.from(document.getElementsByTagName("input"))

//console.log(inputTag)

reset.addEventListener('click', () => {
    for (let index = 0; index < inputTag.length - 1; index++) {
        inputTag[index].value = "";
        reset.setAttribute("aria-disabled", true)
        notZero.setAttribute("aria-hidden", true)
        //console.log(inputTag[index])

    }
})


for (let index = 0; index < inputTag.length - 3; index++) {
    //console.log(inputTag[index])
    inputTag[index].addEventListener('keyup', () => {
        if (inputTag[0].value == "" && inputTag[1].value == "" && inputTag[2].value == "") {
            reset.setAttribute("aria-disabled", true)
        } else {
            reset.setAttribute("aria-disabled", false)
            reset.style.disabled = "true"
            //console.log(inputTag[0])
        }

    })

}