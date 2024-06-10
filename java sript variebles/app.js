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

// function calulateResult() {
//     let userNumber = document.getElementById('number').value
//     let percentage = userNumber / 750 * 100;
//     // if (percentage >= 100.01) {
//     //     alert("please enter a valid number")
//     // }

//     if (percentage >= 80 && percentage <= 100) {
//         alert("You got A+ Congrats")
//     }

//     else if (percentage >= 70 && percentage <= 79) {
//         alert("You got A Congrats")
//     }

//     else if (percentage >= 60 && percentage <= 69) {
//         alert("You got B Congrats")
//     }

//     else if (percentage >= 50 && percentage <=59) {
//         alert("You got C Congrats")
//     }

//     else if (percentage <= 50) {
//         alert("sorry you are failed better luck next time")
//     }

//     else {
//         alert("please enter a valid number")
//     }


//     console.log(userNumber)
//     console.log(percentage)
// }

// document.write('<h1>This is js first class</h1>')
// document.write('<h1>'+'Hello World'+'</h1>')


// var abc = "Irfan Ullah"
// alert(abc)

// var num ="naveed ali"
// document.write(num)

// var firstName = 'Irfan'
// var lastName = 'Ullah'
// document.write(firstName+' '+lastName)

// var num1 = 5
// var num2 = 10
// document.write(num1+num2)


// var num1 = "5"
// var num2 = 10
// document.write(num1+num2)

// var num1 = 5
// var num2 = 10
// document.write(num1*num2)

// var num1 = 5
// var num2 = 10
// document.write(num1-num2)

// var num1 = 5
// var num2 = 10
// document.write(num1/num2)

//  var num1 = "5"
//  var num2 = 1
//  document.write(num1 - num2)

//  var num1 = "a"
//  var num2 = 1
//  document.write(num1 - num2)

//   var num1 = "a12"
//   var num2 = 1
//   document.write(num1 - num2)

// prompt ('Enter your number')

// var a = prompt ('Enter your number')
// var b = prompt ('Enter your name')
// document.write (a%b)

// var a = prompt('Enter your number')
// var b = prompt('Enter your name')

//  var a = prompt('Enter your number') //its string
//  var b = prompt('Enter your name')   //its string
// document.write(typeof(a))

//var a = +prompt('Enter your number') //its number
//var b = +prompt('Enter your name')   //its number
//document.write(typeof (a))

// var add = a + b
// var mul = a - b
// var div = a / b
// var sub = a - b

// + k sign pa concat karega us soorat main jab string ho
// + k sign pa add karega jab dono integer ho

// - sub karega jab 1 string or 1 integer ho tab bhi or jab dono integer ho tab bhi
// or same - wali cheez * / mod % par apply hogi

// jab 1 string ho or us me alphabet ho or 1 number yani integer ho or -sub
// mul* div/ laga hoga to run time pe decide karega or opretion perform kardega

// let name1 ='2'
// if (name1 !== 2){
//     alert('yes')
// }

// let name1 ='2'

// if ('2' !== 2){
//     alert('yes')
// }

// let age = 21
// let resident = 'pakistani'
// let gender = 'male'

// if (resident == 'pakistani' && gender == "male" || gender == 'female') {

//     alert('welcome to dubai!')
//     if(age>18){
//         alert('you can drive cars in dubai')
//     }
//     else {
//         alert ("you can't drive cars in dubai")
//     }
// }

// =====================arrays===========================

// let array = [];
// let std = ['zubair', 'irfan', 'naveed', 'ahmed', 'anab']
// // let stdAge = [12, 13, 14, 15, 16]

// function pushNewStudent(){
//     let newStdName = prompt('please Enter new student name:')
// }
// // std.push('naveed')
// std.unshift ('newStdName')
// console.log(std)

// let student = ['irfan', 'naveed', 'asim', 'haider']
// function pushNewStudent() {
//     let newStudentName = prompt("Please enter new student name:")
//     student.unshift(newStudentName) // add from first
//     console.log(student)
// }

// function removeNewStudent() {
//     student.shift(removeNewStudent) // remove from first
//     console.log(student)
// }



// function pushNewStudentInLast() {
//     let newStudentName = prompt("Please enter new student name:")
//     student.push(newStudentName) // add from last
//     console.log(student)
// }

// function removeNewStudentInLast() {
//     student.pop(removeNewStudent) // remove from last
//     console.log(student)
// }

// console.log(student)

// let arrayb = [];

// let class1std = ['zubair', 'junaid', 'irfan']
// let class2std = ['raheel', 'naveed', 'ali']

// let stds = [class1std, class2std]

// console.log (stds [0][1], stds [1][1])


// =============slice==========================

// const fruits = ["banana", "orange", "mango", "samsung", "papaya", "apple"]
// let index_of_index_samsung = (fruits.indexOf("samsung"))
// const newFruits = fruits.slice(index_of_index_samsung)
// console.log(newFruits)

// let friends = [["zohaib", "azmat"], ["amir", "Ansari"], [["naveed", "mustafa", "qasim", "sultan"]]]

// // let name = (friends.slice("mustafa","qasim"))

// let myFriend =friends [2][0].slice(1,3)
// console.log (myFriend)

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango",[["milk", "yougourt","butter"]]];

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 1, "Lemon", "kiwi");
// console.log(fruits)


// const newArray = ["Banana", "Orange", "Apple", "Mango",
//     [
//         ["milk", "yougourt", "butter"]
//     ]
// ];

// let deletedItem = newArray[4][0].splice(1, 1, "slice", "eggs")

// console.log(newArray)
// console.log (deletedItem)


// ======================================for loops======================================

// let std = ["zubair", "junaid", "owais", "ayan"]
// for (let i = 0)
for (let i = 0; i < 10; i++){
    console.log("zubair", i)
}

// console.log (std.indexOf ("owais"))
