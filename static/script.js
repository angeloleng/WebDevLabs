
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

//step 7
//function findTheBanana(x1){
//    for (let i = 0; i<x1.length; i++){
//        if (x1[i] == "Banana"){
//            alert("found the Banana in " + i);
//        }
//    }
//}

//findTheBanana(L1);
//findTheBanana(L2);


//step 8
// L1.forEach(findTheBanana);

// function findTheBanana(x){
//     if (x == "Banana"){
//         alert("We found a banana in the first array")
//     }
// }


//step 9
function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var greeting;

    if(0 <= h < 5 || 20 < h){
        greeting = "Good night";
    }else if (h < 12){
        greeting = "Good night";
    }else if (h < 18){
        greeting = "Good night";
    }else if (h < 20){
        greeting = "Good night";
    }
    dynamic.innerHTML = greeting + ", I am Angelo Leng";
}

function addYear(){
    var d = new Date();
    var year = d.getFullYear();
    copyYear.innerHTML = "©" + year + " Angelo Leng. All rights reserved.";
}

/*function showList(){
    document.getElementById("funButton").style.display = "none";
    document.getElementById("funList").style.display = "block";
}*/


function showFull() {
    $("#readMore").hide();
    $("#fullIntro").show();
    $("#defaultIntro").hide();
    $("#readLess").show();
}
function showDefault() {
    $("#readLess").hide();
    $("#defaultIntro").show();
    $("#fullIntro").hide();
    $("#readMore").show();
}


function validForm() {
    if (document.getElementById("nameBox").checkValidity() == false || 
    document.getElementById("emailBox").checkValidity() == false||document.getElementById("commentBox").checkValidity()== false){
        $("#error").show();
    }
}

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(fileInfo => {
        var advice = fileInfo.slip.advice;
        document.getElementById("adviceText").innerText = advice;
    })
    .catch(error =>{
        document.getElementById("adviceText").innerText = "Something went wrong.";
        console.error("Error:" + error)
    })
}