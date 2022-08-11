
const random= require("node:crypto");
const abc=process.argv.slice(2)
let array=abc
// console.log((array[0]))

switch(array[0]){

   case "add":
   console.log((+array[1])+(+array[2]))
    break;
    
    case "sub":
     console.log((+array[1])-(+array[2]))
     break;

     case "mul":
     console.log((+array[1])*(+array[2]))
     break;

     case "div":
     console.log(parseInt((+array[1])/(+array[2])))
     break;

     case "sin":
     console.log(parseInt(Math.sin(+array[1])))
     break;

     case "cos":
     console.log(parseInt(Math.cos(+array[1])))
     break;

     case "tan":
     console.log(parseInt(Math.tan(+array[1])))
     break;

     case "random":
        return console.log((Math.random(+array[1])));
      

     default:
        return console.log("invalid")
        
}