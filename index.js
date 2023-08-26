"use strict";
//  Write program to that calculate the area of rectangular
{
    var length = 13;
    var width = 10;
    const area = width * length;
    console.log(area);
}
// write a program takes input and calculates volume of cube
{
    var length = 12;
    var wid = 18;
    var hieght = 14;
    var volume = length * wid * hieght;
    console.log(volume);
}
//  write a program that checks number is zer, positive or negtive
{
    var value = 5;
    if (value > 0) {
        console.log("positive");
    }
    else if (value < 0) {
        console.log("negtive");
    }
    else {
        console.log("zero");
    }
}
//write a program that check if a given number is even or odd
{
    var a = 5;
    if (a % 2 == 0) {
        console.log("its an even number");
    }
    else {
        console.log("its an odd number");
    }
}
// write a Program that determines if a person is eligible for voting or not
{
    var age = 20;
    if (age >= 18) {
        console.log("yes, you are eligible for voting ");
    }
    else {
        console.log("you are not eligible for voting");
    }
}
// write a program that calculates the result of a mathematical experssion ((10+5)* 3-2 /(4%3)-7)
{
    var a = 10;
    var b = 5;
    var c = 3;
    var d = 2;
    var e = 4;
    var f = 3;
    var g = 7;
    const result = ((a + b) * c - d / (e % f) - g);
    console.log(result);
}
