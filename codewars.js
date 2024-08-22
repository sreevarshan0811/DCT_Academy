// function duplicateEncode(str) 
// {
//     let result = ''
//     for(let i = 0; i < str.length; i++) 
//     {
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) 
//         {
//             result += '('
//         } 
//         else 
//         {
//             result += ')'
//         }
//     }
//     return result
// }
//   console.log(duplicateEncode('din'))
//   console.log(duplicateEncode('recede'))
//   console.log(duplicateEncode('Success'))
//   console.log(duplicateEncode('(( @'))



/*
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// var isSquare = function(n){
//     if(n <0){
//         return false
//     }
//     return Math.sqrt(n) % 1 == 0
// }
// console.log(isSquare(5))
// console.log(isSquare(-1))
// console.log(isSquare(0))
// console.log(isSquare(3))
// console.log(isSquare(4))
// console.log(isSquare(25))
// console.log(isSquare(26))

// function sum(num)
// {
//     let result = 0
//     for(let i = 0;i < num.length;i++)
//     {
//         result += num[i]
//     }
//     return result
// }
// console.log(sum([]))
// console.log(sum([1,5.2,4,0,-1]))
// console.log(sum([-2.398]))


// const past = (h,m,s) => 
// {
//     return s * 1000 + m * 60000 + h * 3600000
// }
// console.log(past(0,1,1))


// const hero = (bullets,dragon) => bullets/2 >= dragon ? true : false
// console.log(hero(10,5))


// const century = year => 
// {
//     let result= ((year + 99)/100)-1
//     return Number.parseInt(result)
// }
// console.log(century(1705))


// const solution = str => str.split('').reverse().join('')
// console.log(solution('world'))


// digitize = n => n.toString().split('').reverse().map(Number)
// console.log(digitize(35231))



const sumArray = arr =>
{
    for(let i = 0; i< arr.length;i++)
    {
    if(arr.length < 0)
    {
    let result = []
    result = arr.sort((a,b) => a-b)
    result.pop()
    result.shift()
    const res = result.reduce((acc,cv)=> acc+cv,0)
    return res
    }
    else
    {
        return 0
    }
}
}
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([1, 1, 11, 2, 3]))

