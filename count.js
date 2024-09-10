// NUMBER_OF_VOWELS
// const player = 'virat',vowels = 'aeiou'
// let count = 0
// for(let i = 0; i < player.length; i++)
// {
//     if(vowels.includes(player[i]))
//     {
//         count++
//     }
//     console.log(count)
// }

// const { total } = require("./backend/expense-mvc/app/controllers/expenses-cltr")


//ONLY_VOWELS
// const city = 'BaNgAlOrE',vowels = 'aeiouAEIOU'
// let result=''
// for(i=0;i<city.length;i++){
//     if(vowels.includes(city[i])){
//         result = result + city [i]
//     }
// }
// console.log(result)

//WITHOUT_VOWELS
//METHOD_1
// const city = 'bangalore',vowels ='aeiouAEIOU'
// let result = ''
// for(let i = 0;i<city.length;i++)
// {
//     if(vowels.includes(city[i]))
//     {
//         result = result       //Use 'continue' to skip the loop to else. 
//     }
//     else 
//     {
//         result = result + city[i]
//     }
// }
// console.log(result)

//METHOD_2
// const city = 'bangalore',vowels ='aeiouAEIOU'
// let result = ''
// for(let i = 0;i<city.length;i++)
// {
//     if(!vowels.includes(city[i]))      // Use not operator '!' to find false values.
//     {
//         result = result + city[i]
//     }
// }
// console.log(result)


//REVERSE_A_STRING
//METHOD_1---using methods
// const str='dct'
// console.log(str.split('').reverse().join(''))    //split the array 'split()' -> reverse the array 'reverse()' -> join the array 'join()'.

//METHOD_2----without methods
// const str = 'dct'
// let reverse = ''
// for(let i = str.length-1;i>=0;i--){
//     reverse = reverse + str[i]
// }
// console.log(reverse)

//MOVE_CHARACTER
//METHOD_1-----Without using hash key values
// const str = 'JaVaSCriPT'
// let cap = '',small = ''
// for(i = 0;i<str.length;i++){
//     if(str[i]==str[i].toUpperCase()){          //'.toUpperCase()' to find the uppercase letters.
//         cap = cap + str[i]
//     }
//     else{
//         small = small + str[i]
//     }
// }
// console.log(cap+small)

//METHOD_2---Using hash key values
// const str = 'JaVaSCriPT'
// let cap = '',small = ''
// for(i = 0;i < str.length;i++)
// {
//     if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <=90)           //using '.charCodeAt()' to find the hash key value.
//     {
//         cap = cap + str[i]
//     }
//     else
//     {
//         small = small + str[i]
//     }
// }
// console.log(cap+small)


const Expense = [
    {
        "_id": "66dff012e41d3f12ae5ed742",
        "expenseDate": "2024-09-10T00:00:00.000Z",
        "amount": 3000,
        "category": "66dab9872fefd8e00fdc17bf",
        "createdAt": "2024-09-10T07:06:58.024Z",
        "updatedAt": "2024-09-10T14:36:50.651Z",
        "__v": 0
    },
    {
        "_id": "66dff03ee41d3f12ae5ed745",
        "expenseDate": "2024-09-10T00:00:00.000Z",
        "amount": 2000,
        "category": "66dab9ad2fefd8e00fdc17c4",
        "createdAt": "2024-09-10T07:07:42.312Z",
        "updatedAt": "2024-09-10T14:36:08.609Z",
        "__v": 0
    },
    {
        "_id": "66dff05ee41d3f12ae5ed748",
        "expenseDate": "2024-09-10T00:00:00.000Z",
        "amount": 9000,
        "category": "66dab9b72fefd8e00fdc17c6",
        "createdAt": "2024-09-10T07:08:14.999Z",
        "updatedAt": "2024-09-10T14:35:08.651Z",
        "__v": 0
    },
    {
        "_id": "66e046b9fc6e260a55183ce0",
        "expenseDate": "2024-09-10T00:00:00.000Z",
        "amount": 3500,
        "category": "66dab9c62fefd8e00fdc17c8",
        "createdAt": "2024-09-10T13:16:41.671Z",
        "updatedAt": "2024-09-10T14:33:29.962Z",
        "__v": 0
    }
]
let total = 0
for (let i =0; i<Expense.length; i++)
    {
        total += Expense[i].amount 
    }
    console.log(total)



