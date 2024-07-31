// const games = ['football', 'cricket', 'hockey', 'basketball']
// games.forEach(function(element)
// {
//     console.log(element)
// })
// const numbers = [10, '1', 11, '2', '3', 12 ]
// const result1 = [],result2 = []
// numbers.forEach(function(element)
// {
//     if(typeof element == 'string')
//     {
//         result1.push(element)
//     }
//     else{
//         result2.push(element)
//     }
// })
// console.log(result1,result2)


//Adding values to the element
//Using function expressions
// const change =  (arr) =>
// {
//     const result = arr.map((ele) =>
// {
//     if(ele % 2 == 0)
//     {
//         return ele+2
//     }
//     else
//     {
//         return ele+3
//     }
// })
// return result
// }
// console.log(change([10, 11, 12, 13]))


// //Using arrow function
// const transform = (arr) => arr.map(ele => ele %2 == 0 ? ele + 2 : ele + 3);
// console.log(transform([10, 11, 12, 13, ]))


//Get strong password
// const getStrongPasswords = arr=> result = arr.filter (ele => ele.length>5)
// console.log(getStrongPasswords(['abc12','secret','secret123','pass']))
// console.log(getStrongPasswords(['veghar','balerion','vermithor','syrax']))


// const getStrings = arr => result = arr.filter(ele => typeof ele =='string')
// console.log(getStrings(['dct',123, ['ab'] ,'blore']))






// function a(a){
//     return function b(b){
//         return function c(c){
//             return (a+b+c)
//         }
//     }
// }
// let res = a
// console.log(res(1)(2)(3))
// console.log(res(1)(2,3))
// console.log(res(1,2,3))


//Currying    
function multiply(...args){

    };

function advancedCurry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

const curriedAdvanced = advancedCurry(multiply); // multiply -- (HOC) higher order function(function taking another function as an input and returning another function as an output)

// console.log(curriedAdvanced(2)(4)(6));
// console.log(curriedAdvanced(2,4)(6));
// console.log(curriedAdvanced(2)(4,6));
console.log(curriedAdvanced(2,4,6));
console.log(curriedAdvanced(2,4,6,8))
console.log(curriedAdvanced(2,4,6,8))