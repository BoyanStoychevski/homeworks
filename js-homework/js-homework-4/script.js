console.log("connected");

//HOMEWORK 01
let story = ["Bojan", "happy", "running"];
let story2 = ["Darko", "happy", "eating"];

function tellStory(items) {
    let sentence = `This is ${items[0]}. ${items[0]} is a nice person. Today they are ${items[1]}. They are ${items[2]} all day.`;
    return sentence;
}

console.log(tellStory(story));
console.log(tellStory(story2));


//HOMEWORK2
let numbers = [1, 8, 12, 15, 50];
let numbers2 = [5, -4, -25, 1, "2000"];

function isNumber(value) {
    return typeof value === 'number';
}

function sumNumbers(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        if (isNumber(items[i])) {
            sum = sum + items[i];
        }
    }
    return sum;
}

console.log(sumNumbers(numbers));
console.log(sumNumbers(numbers2));


//HOMEWORK3
let words = ["I'm", "learning", "JavaScript,", "not", "Java."];
let words2 = ["Hi,", "I", "want", "burger", "from", "7ca"]

function homework3(items) {
    let sentence = "";
    for (let word of items) {
        sentence = `${sentence} ${word}`;
    }
    return sentence;
}

console.log(homework3(words));
console.log(homework3(words2));


//HOMEWORK4
let homework4 = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        homework4 += i + "\n";
    } else {
        homework4 += i + " ";
    }
}

console.log(homework4);


//HOMEWORK5
let minMaxNumbers = [33, 5, 55, 9, 1];
let minMaxNumbers2 = [25, "Bojan", 51, "-2", 1];

function homework5(items){
    let max = items[0];
    let min = items[0];

    for (let i = 1; i < items.length; i++) {
        if (isNumber(items[i])) {
            if (items[i] > max) {
                max = items[i];
            }
            if (items[i] < min) {
                min = items[i];
            }
        }
    }

    let sum = min + max;

    return sum;
}

console.log(homework5(minMaxNumbers));
console.log(homework5(minMaxNumbers2));


//HOMEWORK6
let firstNames = ["John", "Jim", "Hommer"];
let lastNames =  ["Snow", "Karry", "Simpson"];

function homework6(){
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++){
      fullNames.push(`${i + 1}.${firstNames[i]} ${lastNames[i]}`)  
    }
    return fullNames;
}

console.log(homework6());