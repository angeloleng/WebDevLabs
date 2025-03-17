
//step 4
var x = 5;
var y = 7;
var z = x + y;

console.log(z);

var A = "Hello";
var B = "world!";
var C = A + " " + B;

console.log(C)


//step 5
function SumNPrint(x1, x2){
    var x3;
    if (typeof x1 === 'number' && typeof x2 === 'number'){
        x3 = x1 + x2;
    }else if (typeof x1 === 'string' && typeof x2 === 'string'){
        x3 = x1 + " " + x2;
    }
    console.log(x3);
}

SumNPrint(x,y)
SumNPrint(A,B)


//step 6
if(C.length > z){
    console.log(C);
}else if (C.length < z){
    console.log(z);
}else if (C.length == z){
    console.log("good job!");
}


var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(x1){
    for (var i = 0; i<x1.length; i++){
        if (x1[i] === "Banana"){
            console.log("found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBanana2(x1){
    if (x1 == "Banana"){
        console.log("We found a banana in the array.")
    }
}

//step 9
function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var greeting;

    if(0 <= h < 5){
        greeting = "Good night";
    }else if (h < 12){
        greeting = "Good night";
    }else if (h < 18){
        greeting = "Good night";
    }else if (h < 20){
        greeting = "Good night";
    }else if (h < 24){
        greeting = "Good night";
    }
    dynamic.innerHTML = greeting;
}
greetingFunc()