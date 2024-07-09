const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertButton = document.getElementById('convert')
const resultDiv = document.getElementById('result')

let rates = {
    NGN: {
        USD: 0.0009,
        EUR: 0.00084,
        GBP: 0.00073,
        ISK: 0.1265,
        NOK: 0.00988
    },
    USD {
        NGN: 1111.51,
        EUR: 0.93827,
        GBP: 0.80825,
        ISK: 140.921,
        NOK: 11.0106
    },
    EUR {
        NGN: 1184.4,
        USD: 1.06557,
        GBP: 0.86134,
        ISK: 150.162,
        NOK: 11.7339
    },
    GBP {
        NGN: 1374.89,
        USD: 1.23695,
        EUR: 1.16061,
        ISK: 174.312,
        NOK: 13.6195
    },
    ISK {
        NGN: 7.85404,
        USD: 0.00707,
        EUR: 0.00663,
        GBP: 0.00571,
        NOK: 0.0778
    },
    NOK {
        NGN: 100.819,
        USD: 0.0907,
        GBP: 0.07331,
        EUR: 0.0851,
        ISK: 12.7821
    }
};convertButton.addEventListener('click', () => {
    let amount = parseFloat(amountInput.value);
    let from = fromSelect.value;
    let to = toSelect.value;
    let result;
    if (from === to) {
        result = amount;
    }else {
        result = amount * rate[from][to];
    }
    resultDiv.textContent = '${amount} ${from} = {result.toFixed(2)} {to}';
})