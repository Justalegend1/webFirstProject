window.onload = function () {
    let c = { 'USD': '58.1006', 'EUR': '56.4751', 'RUB': '1' };

    let val = document.getElementById('val');
    let currency1 = document.getElementById('cur1');
    let currency2 = document.getElementById('cur2');
    let result = document.getElementsByClassName('convert_result')[0];
    function summ() {
        let z = 0;
        let y = 0;
        if (currency1.value === currency2.value) {
            result.innerText = val.value;
        } else {
            z = val.value * c[currency1.value]; // тот, из которого конвертируем в рублях
            y = (c[currency2.value] * val.value);//тот, в который конвертируем
            result.innerHTML = ((((z / y) * val.value) * 100) / 100).toFixed(4);
        }
    }
    val.oninput = function () {
        summ();
    };
    currency1.onchange = function () {
        summ();
    };
    currency2.onchange = function () {
        summ();
    }
}