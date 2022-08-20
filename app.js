// https://calculator.swiftutors.com/pythagorean-theorem-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ARadio = document.getElementById('ARadio');
const BRadio = document.getElementById('BRadio');
const CRadio = document.getElementById('CRadio');

let A;
let B = v1;
let C = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ARadio.addEventListener('click', function() {
  variable1.textContent = 'B';
  variable2.textContent = 'C';
  B = v1;
  C = v2;
  result.textContent = '';
});

BRadio.addEventListener('click', function() {
  variable1.textContent = 'A';
  variable2.textContent = 'C';
  A = v1;
  C = v2;
  result.textContent = '';
});

CRadio.addEventListener('click', function() {
  variable1.textContent = 'A';
  variable2.textContent = 'B';
  A = v1;
  B = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ARadio.checked)
    result.textContent = `A = ${computeA().toFixed(2)}`;

  else if(BRadio.checked)
    result.textContent = `B = ${computeB().toFixed(2)}`;

  else if(CRadio.checked)
    result.textContent = `C = ${computeC().toFixed(2)}`;
})

// calculation

function computeA() {
  return Math.sqrt(Math.pow(Number(B.value), 2) + Math.pow(Number(C.value), 2));
}

function computeB() {
  return Math.sqrt(Math.pow(Number(A.value), 2) - Math.pow(Number(C.value), 2));
}

function computeC() {
  return Math.sqrt(Math.pow(Number(A.value), 2) - Math.pow(Number(B.value), 2));
}