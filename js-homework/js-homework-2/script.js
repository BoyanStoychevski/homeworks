// Chinese Zodiac calculation
let year = 1984;
let inputUser = (year - 4) % 12;
console.log(inputUser);


if(inputUser === 0){
    console.log("Rat");
}else if(inputUser === 1){
    console.log("Ox")
}else if(inputUser === 2){
    console.log("Tiger")
}else if(inputUser === 3){
    console.log("Rabbit")
}else if(inputUser === 4){
    console.log("Dragon")
}else if(inputUser === 5){
    console.log("Snake")
}else if(inputUser === 6){
    console.log("Horse")
}else if(inputUser === 7){
    console.log("Goat")
}else if(inputUser === 8){
    console.log("Monkey")
}else if(inputUser === 9){
    console.log("Rooster")
}else if(inputUser === 10){
    console.log("Dog")
}else if(inputUser === 11){
    console.log("Pig")
};