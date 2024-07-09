function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    var simpleInterest = (principal * rate * time) / 100;
    var amount = simpleInterest + principal

    document.getElementById('result').innerHTML = "Simple Interest: $" + amount.toFixed(2);
}