const betBtn = document.querySelector(".bet")
const moneyValue = document.querySelector(".money");
const betInput = document.querySelector("#input");

betBtn.addEventListener("click", function () {
        checkBet();
});

function checkBet() {
        let inputValue = parseInt(betInput.value);
        let textValue = parseInt(moneyValue.textContent);
        if (textValue >= inputValue) {
                moneyValue.textContent -= betInput.value;
        } else {
                alert("You don't have enough money!");
        }
}

// game part 

const numberOne = document.querySelector(".one");
const numberTwo = document.querySelector(".two");
const start = document.querySelector(".start");
// const plsyerOne = document.querySelector(".playerOne");
// const plsyerTwo= document.querySelector(".playerTwo");
let one = parseInt(numberOne.textContent);
let two = parseInt(numberTwo.textContent);


start.addEventListener("click", () => {
   generentRandomNumber();
//    checkWinner();
});



function generentRandomNumber() {
        let rnd1 = Math.random();
        let rnd2 = Math.random();
        let rnd3 = Math.random();
        numberOne.textContent = parseFloat(one * rnd3 + rnd1 + 124 * rnd2 - rnd3).toFixed(3);
        numberTwo.textContent = parseFloat(one * rnd2 + rnd3 + 124 * rnd3 - rnd1).toFixed(3);
        if (numberOne.textContent > numberTwo.textContent) {
                console.log("You win!")
        } else if (numberOne.textContent = numberTwo.textContent) {
                console.log("Draw!")
        } else if (numberOne.textContent < numberTwo.textContent) {
                console.log("You lose!");
        }
}

//checkWinner 

function checkWinner () {
     setTimeout(() => {

        if (numberOne.textContent > numberTwo.textContent) {
                alert("You win!")
        } else if (numberOne.textContent = numberTwo.textContent) {
                alert("Draw!")
        } else {
                alert("You lose!")
        }

     },10)  
}




