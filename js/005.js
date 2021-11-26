// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = '10,000,000';

document.write(`n : ${n} <br>`);
document.write(`n.toLocaleString() : ${n.toLocaleString()} <br>`);
document.write(`s : ${s} <br>`);
document.write(`s.replace(/,/g, '') : ${s.replace(/,/g, '')} <br>`);
document.write(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

document.write(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
document.write(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);
document.write(`nFloat.toExponential(4) : ${nFloat.toExponential(4)} <br>`);

document.write(`Number(true) : ${Number(true)} <br>`);
document.write(`Number(false) : ${Number(false)} <br>`);
document.write(`Number('') : ${Number('')} <br>`);
document.write(`Number(' ') : ${Number(' ')} <br>`);
document.write(`Number('hello') : ${Number('hello')} <br>`);
document.write(`Number('10 20') : ${Number('10 20')} <br>`);
document.write(`Number('10     ') : ${Number('10     ')} <br>`);
document.write(`Number('     10') : ${Number('     10')} <br>`);
document.write(`Number('     10     ') : ${Number('     10     ')} <br>`);

document.write(`Math.PI : ${Math.PI} <br>`);
document.write(`Math.round(4.7) : ${Math.round(4.7)} <br>`);
document.write(`Math.pow(2, 8) : ${Math.pow(2, 8)} <br>`);
document.write(`Math.sqrt(64) : ${Math.sqrt(64)} <br>`);
document.write(`Math.abs(-5) : ${Math.abs(-5)} <br>`);
document.write(`Math.random() : ${Math.random()*10} <br>`);
document.write(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)} <br>`);
document.write(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)} <br>`);