/*
    CIT 281 Project 1
    Name: Abby Gregg
*/
let letters = "acefijklmnpqtuvwxyz"

function getRandomLetter(min, max) {
    return letters[Math.floor(Math.random() * (max - min) + min)];
}