function convert(currency) {
    let amount = parseFloat(document.getElementById(currency).value);
    let rate;

    switch (currency) {
        case 'dollar':
            rate = 410; // 1 USD = 410 NGN (example rate)
            break;
        case 'euro':
            rate = 480; // 1 EUR = 480 NGN (example rate)
            break;
        case 'pound':
            rate = 550; // 1 GBP = 550 NGN (example rate)
            break;
        default:
            rate = 1;
    }

    let result = amount * rate;
    document.getElementById('result').innerText = `${amount} ${currency.toUpperCase()} = ${result.toFixed(2)} NGN`;
}
