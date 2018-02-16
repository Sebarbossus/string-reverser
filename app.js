let stdin = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
function reverseString (str) {
    return str.split('').reverse().join('');
}
function outputVal () {
    output.innerHTML = reverseString(stdin.value);
}
submit.addEventListener("click", outputVal);
stdin.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        outputVal();
    }
});