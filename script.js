function calculateValue() {
    let m1 = parseFloat(document.getElementById('m1').value);
    let m = parseFloat(document.getElementById('m').value);
    let m2 = parseFloat(document.getElementById('m2').value);
    if (!isNaN(m1) && !isNaN(m) && !isNaN(m2) && m2 !== 0) {
        let value = ((m1 - m) * 0.1314 * 250 * 100) / (5 * m2);
        document.getElementById('result-value').innerText = 'Qiymat: ' + value;
    } else {
        document.getElementById('result-value').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m2 0 dan farqli bo\'lsin.';
    }
}

function calculateM() {
    let m1 = parseFloat(document.getElementById('m1-m').value);
    let m2 = parseFloat(document.getElementById('m2-m').value);
    let value = parseFloat(document.getElementById('value-m').value);
    if (!isNaN(m1) && !isNaN(m2) && !isNaN(value) && m1 !== 0) {
        let m = m1 - ((value * 5 * m2) / (0.1314 * 250 * 100));
        document.getElementById('result-m').innerText = 'm: ' + m;
    } else {
        document.getElementById('result-m').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m1 0 dan farqli bo\'lsin.';
    }
}

function calculateM1() {
    let m = parseFloat(document.getElementById('m-m1').value);
    let m2 = parseFloat(document.getElementById('m2-m1').value);
    let value = parseFloat(document.getElementById('value-m1').value);
    if (!isNaN(m) && !isNaN(m2) && !isNaN(value) && m2 !== 0) {
        let m1 = m + ((value * 5 * m2) / (0.1314 * 250 * 100));
        document.getElementById('result-m1').innerText = 'm1: ' + m1;
    } else {
        document.getElementById('result-m1').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m2 0 dan farqli bo\'lsin.';
    }
}

function calculateM2() {
    let m1 = parseFloat(document.getElementById('m1-m2').value);
    let m = parseFloat(document.getElementById('m-m2').value);
    let value = parseFloat(document.getElementById('value-m2').value);
    if (!isNaN(m1) && !isNaN(m) && !isNaN(value) && (m1 - m) !== 0) {
        let m2 = ((m1 - m) * 0.1314 * 250 * 100) / (5 * value);
        document.getElementById('result-m2').innerText = 'm2: ' + m2;
    } else {
        document.getElementById('result-m2').innerText = 'Iltimos, barcha maydonlarni to\'ldiring va m1 - m 0 dan farqli bo\'lsin.';
    }
}
