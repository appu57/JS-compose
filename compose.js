//Compose function is basically involves combining multiple function together to create new function . Applies arguement in a right-to-left order .Enhance code modularity , reusability

const subtract = x => x-0;
const multiply = x => x*10;
const add = x=>x+10;

//similar to function add(x){x+2}  const result =add(10)


const compose = (...fns)=>arg=>fns.reduceRight((acc,fn)=>fn(acc),arg);

const composeFunction = compose(
    add,
    multiply,
    subtract
);

const result = composeFunction(10);//subtract , multiply ,add


console.log(result);//110 The compose function is a higher-order function that takes multiple functions as arguments and returns a new function

// Initial State:

// arg: 10 (the initial argument passed to composeFunction)
// acc: undefined (since there's no initial value for the accumulator in the first iteration)
// First Iteration (subtract):

// arg: 10 (unchanged)
// acc: 8 (result of subtract(10))
// Second Iteration (multiply):

// arg: 8 (result from the previous iteration)
// acc: 24 (result of multiply(8))
// Third Iteration (add):

// arg: 24 (result from the previous iteration)
// acc: 29 (result of add(24))




"###############################################################################################################################################################"

let array = [9,8,7,6][1,2,3];
console.log(array); //fetches 3rd index in the first array because above line is treated as an expression sepearted by comma so 1,2 of second array is rejected and only 3rd is picked as an index since expression seperated by comma is executed left to right 

//answer is 6 

//Simplified 

function a() { return 'a'; }
function b() { return 'b'; }
console.log(a(),b()) ; //rejects a() and 'b' is the output since an expression seperated by a comma is considered as multiple function and rejects the left function/value and 
//only executes the last function

"###############################################################################################################################################################"

const x = [1,2,3,4];
console.log("value is " ,x);//prints 4 because expression seperated by a comma is considered as multiple function and rejects the left and only prints last value


"###############################################################################################################################################################"