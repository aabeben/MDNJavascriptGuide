/**
 * Example 1
 */
/*
console.log(x === undefined);
var x = 3;
*/
var x;
console.log(x === undefined);
x = 3
/**
 * Example 2
 */
// will return a value of undefined
/*
var myvar = 'my value';
(function(){
    console.log(myvar); // undefined
    var myvar = 'local variable';
})();
 */
var myvar = 'my value';
(function(){
    var myvar;
    console.log(myvar);
    myvar = 'local variable';
})();
