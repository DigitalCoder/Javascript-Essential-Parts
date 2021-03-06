/*
 * Here we explore the what, why and how of `currying`.
 * Note: 'arity' of a function is the number of parameter it takes.
 */

//Currying refers to the process of transforming a function with multiple arity into the same function with less arity.
//Consider this example

var superHeroes = function(a) {
    return function(b) {
        let result = 'I love '.concat(a).concat(' and ').concat(b);
        return result;
    };
};


var superMan = superHeroes('SuperMan');
superMan('Batman');
//output: "I love SuperMan and Batman"
superMan('Flash');
//output: "I love SuperMan and Flash"

//Here, the curried effect is achieved by binding some of the arguments to the first function invoke, 
//so that those values are fixed for the next invocation.
//Currying is used to reduce the number of function calls. 
//It's handy when you don't know all the parameters at the same time: currying allows you to store the partial result.

