// HOMEWORK 1
function homework(parOne) {
    let result = typeof parOne;
    return console.log(result);
}

homework({ name: "Bojan" })
homework(true)
homework(5)
homework("test")
homework()


// HOMEWORK 2
function convertAge() {
    let age = prompt("Age");
    let conversionType = prompt("Type: human or dog")
    if (conversionType === "human") {
        return `The equivalent human age is ${age / 7}.`;
    } else if (conversionType === "dog") {
        return `The equivalent dog age is ${age * 7}.`;
    } else {
        return "you need to type human or dog"
    }
}
console.log(convertAge());



// HOMEWORK 3
function atm() {
    let balance = 1000;
    let withdrow = parseFloat(prompt("Enter the amount"));

    if (isNaN(withdrow) || withdrow <= 0) {
        return "Invalid input. Please enter a number.";
    }

    if (withdrow > balance) {
        return "Not enough money";
    } else {
        return `You withdrew $${withdrow}. Remaining balance: $${balance}`
    }
}

console.log(atm());


