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