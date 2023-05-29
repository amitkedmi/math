const x = Math.floor(Math.random() * 100);
const y = Math.floor(Math.random() * 100);



const Arry = ["+", "-", "*", "/"];
const s = Math.floor(Math.random() * Arry.length);
const ex = document.getElementById("show").innerHTML = String(x) + Arry[s] + String(y) + "="
function math() {
    const res = document.getElementById("answer").value;
    switch (Arry[s]) {
        case "+":
            if (res == x + y) {

                document.getElementById("result").innerHTML = "good";
            }
            else {
                document.getElementById("result").innerHTML = "not good";
            }
            break;
            case "-":
            if (res == x - y) {

                document.getElementById("result").innerHTML = "good";
            }
            else {
                document.getElementById("result").innerHTML = "not good";
            }
            break;
            case "*":
            if (res == x * y) {

                document.getElementById("result").innerHTML = "good";
            }
            else {
                document.getElementById("result").innerHTML = "not good";
            }
            break;
            case "/":
            if (res == x / y) {

                document.getElementById("result").innerHTML = "good";
            }
            else {
                document.getElementById("result").innerHTML = "not good";
            }
            break;



        }
    }
    document.getElementById("btn").addEventListener("click", math);