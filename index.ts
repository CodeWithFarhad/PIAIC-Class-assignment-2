//  Write program to that calculate the area of rectangular
{
var  length:number = 13;
var  width:number = 10;
const area:number = width*length

console.log(area)
}
 // write a program takes input and calculates volume of cube
 {  
   var length:number = 12;
   var wid:number = 18;
   var hieght:number = 14;
   var volume:number = length*wid*hieght
   console.log(volume)
 }


//  write a program that checks number is zer, positive or negtive
{var value:number= 5;


if(value > 0){
    console.log("positive")
}
else if(value < 0){
 console.log("negtive")
}else{
  console.log("zero")
}
}



//write a program that check if a given number is even or odd

{
  var a:number = 5;

  if( a%2==0 ){
    console.log("its an even number")
  }
  else{
    console.log("its an odd number")

    }
  }


  // write a Program that determines if a person is eligible for voting or not

  {
  var age:number = 20;

if (age>=18){
  console.log("yes, you are eligible for voting ")
}
else{
  console.log("you are not eligible for voting")
}
  }

// write a program that calculates the result of a mathematical experssion ((10+5)* 3-2 /(4%3)-7)
{
 var a:number =  10;
 var b:number = 5;
 var c:number = 3;
 var d:number = 2;
 var e:number = 4;
 var f:number = 3;
 var g:number = 7;
 const result:number = ((a+b)* c-d /(e%f)-g)
 console.log(result)
}