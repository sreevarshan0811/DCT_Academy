// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sreevarshan0811/exe_1.git
// git push -u origin main

// git remote add origin https://github.com/sreevarshan0811/exe_1.git
// git branch -M main
// git push -u origin main



// Looping over tthe object
// const obj = {a:10,b:20,c:30}
// function calcSum(obj)
// {
//     let sum =0
//     for(let key in obj)
//     {
//         sum = sum + obj[key]
//     }
//     return sum

// }
// console.log(calcSum(obj))

// Find Vowel count in the string
// const str = 'bangalore'
// function freqVowel(str)
// {
//     const result = {a:0, e:0, i:0, o:0, u:0}
//     for(let char of str)
//     {
//         if(char in result){
//             result[char] += 1
//         }
//     }return result
// }
// console.log(freqVowel(str))
// console.log(freqVowel('aaaeeeiiiooouuu'))



//find even or odd
// function evenOdd(arr)
// {
//     let even = [], odd = []
//     for(let num of arr){
//         if(num % 2 == 0){
//             even.push(num)
//         }
//         else{
//             odd.push(num)
//         }
//     }
//     return [even,odd]
// }
// console.log(evenOdd([10,11,12,13,14]))



//Find the ASCII values
//  const getAscii = str =>
// {
//     const result = {}
//     for(let char of str){
//         result[char] = char.charCodeAt()
//     }
//     return result
// }
// console.log(getAscii('abc'))
// console.log(getAscii('ab'))
// console.log(getAscii('abcd'))
// console.log(getAscii('abc'))



//Find Length
// function findLength(arr)
// {
//     const result = {}
//     arr.forEach(function(ele) 
//     {
//         result[ele] = ele.length   
//     })
//     return result
// }
// console.log(findLength(['a','ab','abc']))
// console.log(findLength(['aa','aaa','aaaa']))


// const makeObj = arr =>
// {
//     const obj = {}
//     for(let char in arr)
//     {
//         obj[char] = arr[char]
//     }
//     return obj
// }
// console.log(makeObj(['a','b','c']))


// function makeobj(arr)
// {
//     const obj = {}
//     arr.forEach((ele,i) =>
//     {
//         obj[i] = ele
//     })
//     return obj
// }
// console.log(makeobj(['a','b','c']))



//Frequency distribution 
const frequency = str =>{
    const obj = {}
    for(let char of str){
        if(char in obj){
            obj[char] += 1
        }
        else{
            obj[char] = 1
        }
    }
    return obj
}
console.log(frequency('ddcccttd'))
console.log(frequency('aaabbbccccdddeefff'))
console.log(frequency('aaasssdddfff'))