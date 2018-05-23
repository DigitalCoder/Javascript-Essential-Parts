/* 
 * Here we explore the what, why and how of closures.
 * 1. What is closure?
 * 2. Why do we need closures?
 * 3. How does it work internally?
 */

//1. What is closure
/* 
 * Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.
 * A closure is the combination of a function and the lexical environment within which that function was declared.
 * The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
 * 
 */

function add(num) {
    var n1 = num;
    return function add2(n2) {
        console.log(n1 + n2);
        return n1 + n2;
    }
}

var addN = add(5);
addN(5);

// 2. Why would you use one ?
/*
-> Data privacy / emulating private methods with closures. Commonly used in the module pattern.
-> Partial applications or currying.
-> Closures are mostly used in callbacks, such as timeouts, event handlers, and so on, as well as in modules.
*/

//print 1 to 5 and use setTimout in it.

function closureDummy(n) {
    var num = n;
    setTimeout(function () {
        console.log(num);
    }, 3000);
}

function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('After 3 seconds');
            resolve();
        }, 3000)
    })
}
for (let i = 0; i < 5; i++) {
    closureDummy(i);
}

for (let i = 0; i < 5; i++) {
    dummyPromise().then(function () {
        console.log('What am I doing??');
    })
}

//3. How does it work internally ?
/*
 */






