const inpday = document.getElementById("day");
const inpmonth = document.getElementById("month");
const inpyear = document.getElementById("year");
const year = document.getElementById("b1");
const month = document.getElementById("b2");
const day = document.getElementById("b3");
const btn = document.querySelector("button");
const small =document.querySelector("small");
const smal1 = document.getElementById("smal1");
const smal2 = document.getElementById("smal2");
const smal3 = document.getElementById("smal3");
const lb1 = document.getElementById("lb1");
const lb2 = document.getElementById("lb2");
const lb3 = document.getElementById("lb3");
let date = new Date();
let newday = date.getDate();
let newmonth = date.getMonth();
let newyear = date.getFullYear();

// function greet(){
//     let d = inpday.value ;
//     let m = inpmonth.value ;
//     let y = inpyear.value ;
//     if (m> 12 || m <= 0 && d > 31 || d <= 0 || y < 1970){
//         smal2.textContent = "enter vaild month"
//         smal2.style.color = "red";
//         inpmonth.style.color = "red";
//         inpmonth.style.border= "1px solid red"
//         lb2.style.color = "red"
//         smal1.textContent = "enter vaild day"
//         smal1.style.color = "red";
//         inpday.style.color = "red";
//         inpday.style.border= "1px solid red"
//         lb1.style.color = "red"
//         smal3.textContent = "enter vaild year"
//         smal3.style.color = "red";
//         inpyear.style.color = "red";
//         inpyear.style.border= "1px solid red"
//         lb3.style.color = "red"
//         return false
//     }
//     else if (m <= 12 && m > 0 && d <= 31 && d > 0 && y >= 1970) {
//         smal2.textContent = ""
//         smal2.style.color = "hsl(0, 100%, 100%)";
//         inpmonth.style.color = "grey";
//         inpmonth.style.border= "1px solid grey"
//         lb2.style.color = "hsl(0, 1%, 44%)"
//         smal1.textContent = ""
//         smal1.style.color = "hsl(0, 100%, 100%)";
//         inpday.style.color = "grey";
//         inpday.style.border= "1px solid grey"
//         lb1.style.color = "hsl(0, 1%, 44%)"
//         smal3.textContent = ""
//         smal3.style.color = "hsl(0, 100%, 100%)";
//         inpyear.style.color = "grey";
//         inpyear.style.border= "1px solid grey"
//         lb3.style.color = "hsl(0, 1%, 44%)"
//     }  
//     else {
//         return true
//     }
// }


// btn.onclick = function {
    
// }






btn.onclick= function greet(){
    let d = inpday.value ;
    let m = inpmonth.value ;
    let y = inpyear.value ;
    if (m> 12 || m <= 0 && d > 31 || d <= 0 || y < 1970){
        smal2.textContent = "enter vaild month"
        smal2.style.color = "red";
        inpmonth.style.color = "red";
        inpmonth.style.border= "1px solid red"
        lb2.style.color = "red"
        smal1.textContent = "enter vaild day"
        smal1.style.color = "red";
        inpday.style.color = "red";
        inpday.style.border= "1px solid red"
        lb1.style.color = "red"
        smal3.textContent = "enter vaild year"
        smal3.style.color = "red";
        inpyear.style.color = "red";
        inpyear.style.border= "1px solid red"
        lb3.style.color = "red"
        return false
    }
    else if (m <= 12 && m > 0 && d <= 31 && d > 0 && y >= 1970) {
        smal2.textContent = ""
        smal2.style.color = "hsl(0, 100%, 100%)";
        inpmonth.style.color = "grey";
        inpmonth.style.border= "1px solid grey"
        lb2.style.color = "hsl(0, 1%, 44%)"
        smal1.textContent = ""
        smal1.style.color = "hsl(0, 100%, 100%)";
        inpday.style.color = "grey";
        inpday.style.border= "1px solid grey"
        lb1.style.color = "hsl(0, 1%, 44%)"
        smal3.textContent = ""
        smal3.style.color = "hsl(0, 100%, 100%)";
        inpyear.style.color = "grey";
        inpyear.style.border= "1px solid grey"
        lb3.style.color = "hsl(0, 1%, 44%)"
    } 
    let ny = newyear - y;
    let nm = newmonth - m;
    let nd = newday - d;
    if (nd < 0) {
        nm -= 1;
        const prevMonth = new Date(newyear, newmonth - 1, 0).getDate();
        nd += prevMonth;
    }
    if (nm < 0) {
        ny -= 1;
        nm += 12;
    }
    year.textContent = ny;
    month.textContent = nm;
    day.textContent = nd;

     
}



        








