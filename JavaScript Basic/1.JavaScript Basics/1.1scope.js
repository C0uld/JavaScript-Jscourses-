
// Global Scope
var myName = "Jhoan";
var farewell = "see you soon";
// Local Scope => 1.Function Scope,
function name() {
    var myLast = "Sanchez";
    console.log(myName + " " + myLast);
    // 2.Block Scope.
    if ((true)) {
        console.log(farewell);
    }
}

name(); // "Jhoan Sanchez"
console.log(myLast); // ReferenceError: myLast is not defined
