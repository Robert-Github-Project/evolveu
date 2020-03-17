


console.log("Hello World from basic.js")

// function clickFucntion() {
//     var click = Number((document.getElementById("input")).value)

//     if (click < 10) {
//         return console.log("small");
//     }
//     else if (click <= 20){
//         return console.log("medium")
//     }
//     else console.log("large");
// }



function clickFunction() {
    let output = document.getElementById("out");

    
    var click = Number(document.getElementById("input").value)

    if (click < 10) {
         output.innerHTML = "This is small";
    }
    else if (click <= 20){
         output.innerHTML = "This is medium" ;
    }
    else output.innerHTML ="This is Large";
}
