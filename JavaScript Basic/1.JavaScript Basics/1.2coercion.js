
// Implied coercion
4 + "7" // 47 String
4 * "7" // 28 Number
var a = 15; // Number
var b = a + ""; // String


//explicit coercion
var c = String(a); // Here we force the variable to become a String

var d = Number(c); // Here we force the variable to become a Number