//Selectors
const formConvertElement = document.getElementById("converterForm");

formConvertElement.addEventListener("submit", convertNumberToWords);

function convertNumberToWords(event) {
  event.preventDefault();
  console.log("test");
  const inputElement = document.getElementById('numberInput').value.trim();
  const outputElement = document.getElementById('output');

  
  //Regex to check if input value is all numbers, if there is letter, the function will return
  if (!/^\d+$/.test(inputElement)) {
    outputElement.textContent = 'Please enter a valid whole number.';
    return;
  }

  const num = parseInt(inputElement, 10);

  if (num < 0 || num > 1000000) {
    outputElement.textContent = 'Number out of range (0 - 1,000,000).';
    return;
  }

  outputElement.textContent = numberToWords(num);
}

function numberToWords(num) {
  const ones = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  ];
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen',
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety',
  ];

  if (num === 0) return 'zero';

  if (num === 1000000) return 'one million';

  let words = '';

  function addWords(n, scaleWord) {
    if (n > 0) {
      words += `${numberToWords(n)} ${scaleWord} `;
    }
}

  addWords(Math.floor(num / 100000), 'hundred thousand');
  num %= 100000;

  addWords(Math.floor(num / 1000), 'thousand');
  num %= 1000;

  addWords(Math.floor(num / 100), 'hundred');
  num %= 100;

  if (num > 0) {
    if (num < 10) {
        words += ones[num];
    } else if (num < 20) {
        words += teens[num - 10];
    } else {
        words += tens[Math.floor(num / 10)];
        if (num % 10 > 0) {
            words += `-${ones[num % 10]}`;
        }
    }
}

  return words.trim();
}
