// let name1 = "irfan";
// name1 = "ullah";
// console.log (name1)

// var name2 = "ullah"
// name2 = "irfan"
// console.log (name2)

// const name3 ="irfan ullah"
// // name3 ="irfan" not allowed in const
// console.log (name3)

// let fullName ="irfan ullah" //data type string
// fullName ="ali nawaz"
// console.log (typeof fullName)

// let fullName2 ='irfan ullah' //data type strings
// fullName2 ='naveed ali'
// console.log (typeof fullName2)

// let age = 23; //data type Number
// console.log (typeof age)

// let isMarried = true; //data type boolean
// console.log (typeof isMarried)

// let ispass = undefined; // undefined
// console.log (typeof ispass)

// let isFeesPaid = null;  // null 
// console.log (isFeesPaid)

// let stringNumber = "1234";
// console.log (typeof stringNumber)

// let num1 = 22;
// let num2 = 33;
// let num3 = "12";
// console.log(num1 + num2)
// console.log(num2 - num1)
// console.log(num3 * num2)

// let $name = "ali"
// let _$name2 = "ali"
// let 2name = "ali"   //error
// let name = 'ali';
// let NAME = 'ali';
// let FullName = 'ali';
// let fullName = 'ali';
// console.log($name)

// incrimintel and discrimental
// let num = 1;
// console.log(num++)
// console.log(num)
// console.log(++num)

// let num = 1;
// console.log(num++ + num++)
// console.log(num)

// var message = "Thanks for your input!" +"please come back";
// console.log(message)

// let name1 = prompt ("Enter your name: ")
// let message = alert("Welcome!" + name1)
// console.log (name1)

// function printAlert() {
//     let name1 = prompt("Enter your name: ")
//     console.log(name1)
//     alert("welcome to my site" + name1)
// }

// let gender = prompt("enter your gender");
// console.log('gender' , gender)
// if (gender =="male") {
//     alert("You are allowed to enter in graveyard")
// }
// else if (gender == "female"){
//     alert("You are not allowed to enter")
// }
// else {
//     alert("please enter a valid gender")
// }

function calulateResult(){
    let userNumber = document.getElementById('number').value
    let percentage =userNumber/750*100;
    if(percentage >= 80){
        alert("You got A+ Congrats")
    }

    else if(percentage >= 70){
        alert("You got A Congrats")
    }

    else if(percentage >= 60){
        alert("You got B Congrats")
    }

    else if(percentage >= 50){
        alert("You got C Congrats")
    }

    else if (percentage >= 0.1){
        alert("sorry you are failed better luck next time")
    }
    else if (percentage >= 100.01){
        alert("please enter a valid number")
    }

    else {
        alert ("please enter a valid number")
    }

    console.log(userNumber)
    console.log(percentage)
}