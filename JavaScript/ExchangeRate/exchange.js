function convert() {
    const fromAmount = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const exchangeRates = {
        USD: 0.0026, // 1 NGN = 0.0026 USD
        EUR: 0.0022, // 1 NGN = 0.0022 EUR
        GBP: 0.0020  // 1 NGN = 0.0020 GBP
    };

    const result = fromAmount * exchangeRates[toCurrency];
    document.getElementById('result').innerText = `Converted Amount: ${result.toFixed(2)} ${toCurrency}`;
}