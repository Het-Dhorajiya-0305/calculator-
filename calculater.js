const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".ope");
const AC = document.querySelector(".dull");
const display = document.querySelector(".display");
const eqaul = document.querySelector(".ans");


let s1 = "";
let s3 = "";
let numbers = [];  
let operators = [];
let finalAns = 0;

eqaul.addEventListener("click", () => {
    numbers.push(s3);
    console.log(operators);
    console.log(numbers);
    finalAns = opeartion();
    display.textContent = finalAns;
})

AC.addEventListener("click", () => {
    display.textContent = " ";
    s1 = " ";
    numbers = [];
    operators = [];
    s3 = "";
    finalAns = 0;
})


for (let num of number) {
    num.addEventListener("click", () => {
        if (display.textContent == finalAns) {
            s1 = " ";
            numbers = [];
            operators = [];
            s3 = "";
            finalAns = 0;
        }
        s1 += num.textContent;
        s3 += num.textContent;

        display.textContent = s1;
    })
}

operator.forEach((ope) => {
    ope.addEventListener("click", () => {
        if (display.textContent == finalAns) {
            s1 = " " + finalAns;
            numbers = [];
            operators = [];
            s3 = "";
            numbers.push(s1);
            finalAns = 0;
        }
        else {
            numbers.push(s3);
            s3 = "";
        }
        operators.push(ope.textContent);



        s1 += " " + ope.textContent + " ";
        display.textContent = s1;

    })
})

const opeartion = () => {
    let i = 1;
    let j = 0;
    let ans = +numbers[0];

    while (i < numbers.length && j < operators.length) {
        if (operators[j] == "+") {
            ans += +numbers[i];
            i++;
            j++;
            console.log("sum", ans);
        }
        if (operators[j] == "-") {
            ans -= Number(numbers[i]);
            i++;
            j++;
            console.log("min", ans);
        }
        if (operators[j] == "÷") {
            ans /= +numbers[i];
            i++;
            j++;
            console.log("div", ans);
        }
        if (operators[j] == "x") {
            ans *= +numbers[i];
            i++;
            j++;
            console.log("mul", ans);
        }
    }
    console.log(ans);
    return ans;
}