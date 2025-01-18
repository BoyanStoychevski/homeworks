
document.getElementById('converterForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('numberInput').value.trim();
    const output = document.getElementById('output');
  
    if (!/^\d+$/.test(input)) {
      output.textContent = 'Please enter a valid whole number.';
      return;
    }
  
    const num = parseInt(input, 10);
  
    if (num < 0 || num > 1000000) {
      output.textContent = 'Number out of range (0 - 1,000,000).';
      return;
    }
  
    output.textContent = numberToWords(num);
  });
  
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
  
    const addWords = (n, scale) => {
      if (n > 0) words += `${numberToWords(n)} ${scale} `;
    };
  
    addWords(Math.floor(num / 100000), 'hundred thousand');
    num %= 100000;
  
    addWords(Math.floor(num / 1000), 'thousand');
    num %= 1000;
  
    addWords(Math.floor(num / 100), 'hundred');
    num %= 100;
  
    if (num > 0) {
      if (num < 10) words += ones[num];
      else if (num < 20) words += teens[num - 10];
      else {
        words += tens[Math.floor(num / 10)];
        if (num % 10 > 0) words += `-${ones[num % 10]}`;
      }
    }
  
    return words.trim();
  }
  