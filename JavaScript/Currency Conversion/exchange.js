const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

let rates = {
    NGN: {
        USD: 0.0027,
        EUR: 0.0024,
        GBP: 0.0021,
        ISK: 0.036,
        NOK: 0.028
    },
    USD: {
        NGN: 369.43,
        EUR: 0.88,
        GBP: 0.76,
        ISK: 13.31,
        NOK: 9.33
    },
    EUR: {
        NGN: 415.51,
        USD: 1.14,
        GBP: 0.86,
        ISK: 15.13,
        NOK: 10.54
    },
    GBP: {
        NGN: 476.53,
        USD: 1.32,
        EUR: 1.16,
        ISK: 17.31,
        NOK: 12.23
    },
    ISK: {
        NGN: 27.53,
        USD: 0.075,
        EUR: 0.066,
        GBP: 0.058,
        NOK: 0.067
    },
    NOK: {
        NGN: 35.41,
        USD: 0.107,
        EUR: 0.095,
        GBP: 0.082,
        ISK: 14.93
    }
};

convertButton.addEventListener('click', () => {
    let amount = parseFloat(amountInput.value);
    let from = fromSelect.value;
    let to = toSelect.value;
    let result;

    if (from === to) {
        result = amount;
    } else {
        result = amount * rates[from][to];
    }

    resultDiv.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});

