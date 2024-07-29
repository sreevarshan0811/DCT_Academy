// //Return something to Me1
// const giveMeSomething = str =>"something "+ str
// console.log(giveMeSomething("is better than nothing"))
// console.log(giveMeSomething("Bob Jane"))
// console.log(giveMeSomething("something"))



// //Boolean to string conversion
// const boolToString = str =>
// {
//     if(str== true)
//     {
//         return "true"
//     }
//     else
//     {
//         return "false"
//     }
// }
// console.log(boolToString(true))
// console.log(boolToString(false))
// console.log(boolToString(1))
// console.log(boolToString(0))



// //Greet with love
// const greeting =str =>
// {
//     if(str == "Jack")
//     {
//         return 'Hello, my love!'
//     }
//     else{
//         return 'Hello, ' + str + '!'
//     }
// }
// console.log(greeting('Matt'))
// console.log(greeting('Helen'))
// console.log(greeting('Jack'))



//Comparing Strings by count of characters
// const comp =(str1,str2) =>
// {
//     if(str1.length == str2.length)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(comp('AB','CD'))
// console.log(comp('ABC','DE'))
// console.log(comp('hello','dctacademy'))



//Is the string empty?
// const isEmpty = str =>
// {
//     if(str.length == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isEmpty(''))
// console.log(isEmpty(' '))
// console.log(isEmpty('a'))



//Find the length using loop
// const length = str =>
// {
//     let result = 0
//     for(let i =0 ; i < str.length;i++){
//         result +=1
//     }
//     return result
// }
// console.log(length('apple'))
// console.log(length('make'))
// console.log(length('a'))
// console.log(length(''))


//Convert a string into integer
// const stringInt = str => Number.parseInt(str)
// console.log(stringInt('6'))
// console.log(stringInt('1000'))
// console.log(stringInt('12'))


//Concartenate first and lastname into one
// const concatName = (str1,str2) => str2 + ', ' + str1
// console.log(concatName('First','Last'))
// console.log(concatName('John','Doe'))
// console.log(concatName('Mary','Jane'))


//Is the string Odd or Even?
// const oddOrEven =str =>
// {
//     if(str.length % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(oddOrEven('apples'))
// console.log(oddOrEven('pears'))
// console.log(oddOrEven('cherry'))


//Word without first letter
// const newWord = str =>
// {
//     let result = ''
//     for(let i = 1 ; i<str.length ; i++)
//     {
//         result += str[i]
//     }
//     return result
// }
// console.log(newWord('apple'))
// console.log(newWord('cherry'))
// console.log(newWord('plum'))


//Name Greeting
// const helloName = (str) => 'Hello ' + str +'!'
// console.log(helloName('Gerald'))
// console.log(helloName('Tiffany'))
// console.log(helloName('Ed'))


//Convert an array to string
// const arrayToString = arr => 
// {
//     let result = ''
//     for(let i = 0 ; i<arr.length; i++)
//     {
//         result += arr[i]
//     }
//     return result
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(arrayToString(['a', 'b', 'c', 'd', 'e', 'f']))
// console.log(arrayToString([1, 2, 3, 'a', 's', 'dAAAA']))


//Word Numbers
// const numbers = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9 }
// const word = str => numbers[str]
// console.log(word('one'))
// console.log(word('two'))
// console.log(word('nine'))



//Check string for spaces
// const hasSpaces =str =>
// {
//     if(str.includes(' '))?
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(hasSpaces('hello'))
// console.log(hasSpaces('hello, world'))
// console.log(hasSpaces(' '))
// console.log(hasSpaces(''))
// console.log(hasSpaces(',./!@#'))


//Is last character "n" ?
// const isLastCharacterN = str =>
// {
//     if(str.charAt(str.length-1) == 'n'){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isLastCharacterN('Aiden'))
// console.log(isLastCharacterN('Piet'))
// console.log(isLastCharacterN('Bert'))
// console.log(isLastCharacterN('Dean'))



//Slice Check Repeat Concatenate
// const frontThree = str =>
// {
//     let result = ''
//     for(let i = 0; i<str.length & i<3; i++)
//     {
//         result+=str[i]
//     }
//     return result.repeat(3)
// }
// console.log(frontThree('Python'))
// console.log(frontThree('Cucumber'))
// console.log(frontThree('bioshock'))



//Concatenate First and last char of string
// const firstLast = str =>str.charAt(0)+ str.charAt(str.length-1)
// console.log(firstLast('gautam'))
// console.log(firstLast('raghav'))
// console.log(firstLast('gopi'))



//Stuttering function
// const stutter = str => 
// {
//     result = ''
//     for(let i = 0; i<str.length & i < 2;i++){
//         result+=str[i]
//     }
//     result = result+'... '
//     return result.repeat(2)+str+'?'
// }
// console.log(stutter('incredible'))
// console.log(stutter('enthusiastic'))
// console.log(stutter('outstanding'))



//Default Mood
// const moodToday = str =>
// {
//     if(str == undefined){
//         return "Today, I am feeling neutral"
//     }
//     else{
//     return "Today, I am feeling " + str
//     }
// }
// console.log(moodToday('happy'))
// console.log(moodToday('sad'))
// console.log(moodToday())



// //Count sylabells
// function countSylabells(str)
// {
//     str = str.toLowerCase()
//     let result = '',count = 0
//     for(let i = 0;i < str.length & i < 2; i++)
//     {
//         result+=str[i]
//     }
//     for(let i = 0 ; i < str.length;i++)
//     {
//         if(str.includes(result)==true)
//         {
//             count+=1
//         }
//     }
//     return count/2
// }
// console.log(countSylabells('hehehehehehe'))
// console.log(countSylabells('bobobobobobobobo'))
// console.log(countSylabells('NANANA'))



//---------------------------------------------------------------------------------------------------------------------------------------------
// Exercise_2
// const repeatString = (str,num) =>
// {
//     if(typeof str == 'string')
//     {
//         return str.repeat(num)
//     }
//     else{
//         return 'Not a string !!'
//     }
// }
// console.log(repeatString('Alex',2))
// console.log(repeatString('Matt',3))
// console.log(repeatString(1990,7))



// Char to ASCII
// const ctoa = (str) => str.charCodeAt()
// console.log(ctoa('A'))
// console.log(ctoa('m'))
// console.log(ctoa('['))
// console.log(ctoa('\\'))



// Case intensive comparison
// const match = (str1,str2) =>
// {
//     str2 = str2.toLowerCase()
//     if(str1 == str2){return true}
//     else{return false}
// }
// console.log(match('hello','hELLo'))
// console.log(match('motive','emotive'))
// console.log(match('venom','VENOM'))
// console.log(match('mask','mAsking'))



// String or integer?
// const intOrString = str =>
// {
//     if(typeof str == 'string'){return 'str'}
//     else{return 'int'}
// }
// console.log(intOrString(8))
// console.log(intOrString('Hello'))
// console.log(intOrString(9843532))



// Hello;World;HelloWorld
// const helloWorld = num =>
// {
//     if(num%3 == 0 & num%5 == 0){return 'Hello World'}
//     else if( num%3==0){return 'Hello'}
//     else if(num%5 == 0){return 'World'}
// }
// console.log(helloWorld(3))
// console.log(helloWorld(5))
// console.log(helloWorld(15))



// Burp function
//  const longBurp = num => 
// {
//     const str = 'r' 
//     return 'Bu'+str.repeat(num)+'p'
// }
// console.log(longBurp(3))
// console.log(longBurp(5))
// console.log(longBurp(9))



// Modify last char
// const modifyLast = (str,num) =>
// {
//     let result = ''
//     for(let i = 0;i < str.length-1;i++)
//     {
//         result += str[i]
//     }
//     return result + str[str.length-1].repeat(num) 
// }
// console.log(modifyLast('Hello',3))
// console.log(modifyLast('hey',6))
// console.log(modifyLast('excuse me what?',5))



// Count the number of D's
// const countDs = str =>
// {
//     let count =  0
//     for(let i = 0;i < str.length ; i++)
//     {
//         if(str[i] == 'd' | str[i] == 'D')
//         count+=1
//     }
//     return count
// }
// console.log(countDs('My friend Dylan got distracted in school.'))
// console.log(countDs('Derbis was scattered all over the yard.'))
// console.log(countDs('The rodents hibernated in their den.'))


// Lowercase Uppercase and Mixed
// const getCase = str =>
// {
//     let result = ''
//     if(str == str.toLowerCase()){result = 'lower'}
//     else if(str == str.toUpperCase()){result = 'upper'}
//     else{result = 'Mixed'}
//     return result
// }
// console.log(getCase('whisper...')) 
// console.log(getCase('SHOUT!')) 
// console.log(getCase('Indoor Voice')) 


// Check if same
// const sameCase = str =>
// {
//     if(str == str.toUpperCase() | str == str.toLowerCase()){return true}
//     else{return false}
// }
// console.log(sameCase('hello'))
// console.log(sameCase('HELLO'))
// console.log(sameCase('Hello'))
// console.log(sameCase('ketcHUp'))



// Scottish  Screaming
// const toScottishScreaming = str =>
// {
//     const vow = 'aeiouAEIOU'
//     let result = ''
//     for(let i =0 ; i < str.length ; i++)
//     {
//         if(vow.includes(str[i])){result += 'e'}
//             else{result+= str[i]}
//     }
//     return result.toUpperCase()
// }
// console.log(toScottishScreaming('hello world'))
// console.log(toScottishScreaming('Mr. Fox was very naughty'))
// console.log(toScottishScreaming('Butterflies are beautiful!'))



//Youtube upload count
// const uploadCount = (arr,str) =>
// {
//     let count = 0
//     for(let i = 0 ; i < arr.length ; i++)
//     {
//         if(arr[i].includes(str)){count+=1}
//         else{count+=0}
//     }
//     return count
// }
// console.log(uploadCount(['Sept 22','Sept 21','Oct 15'],'Sept'))
// console.log(uploadCount(['Sept 22','Sept 21','Oct 15'],'Oct'))



//Forbidden letter
// const forbiddenLetter = (str,arr) =>
//     {
//         for(let i = 0 ; i < arr.length ; i++)
//         {
//             if(arr[i].includes(str)){return false}
//             else{return true}
//         }
//     }
//     console.log(forbiddenLetter('r',['rock','paper','scissors']))
//     console.log(forbiddenLetter('a',['spoon','fork','knife']))




//Get words count
// const countWords = str => str.split(' ').length
// console.log(countWords('Just an example here move along'))
// console.log(countWords('This is a test'))
// console.log(countWords('What an easy task, right'))



//Letters only
// const lettersOnly = str =>
// {
//     let result = ''
//     for(let i = 0; i < str.length; i++)
//     {
//         if(str[i].charCodeAt()>= 65 & str[i].charCodeAt() <= 90 | str[i].charCodeAt() >= 97 & str[i].charCodeAt() <= 122 )
//         {
//             result += str[i]
//         }
//     }
//     return result
// }
// console.log(lettersOnly("R!=:~0o0./c&}9k'60=y"))
// console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"))
// console.log(lettersOnly("^U)6$22>8p)."))



//Check if identical characters are present
// const isIdentical = str =>
// {
//     let result = 0
//     for(let i = 0;i < str.length; i++)
//     {
//         if(str[i] == (str[0])){result+=1}
//         else{result= 0}
//     }
//     return result == str.length
// }
// console.log(isIdentical('aaaaaa'))
// console.log(isIdentical('aabaaa'))
// console.log(isIdentical('ccccca'))
// console.log(isIdentical('kk'))



//Get Extension
// const getExtension = arr =>
// {
//     let result = []
//     for(let i = 0 ;i < arr.length ; i++)
//     {
//         arr = arr[i].toString().split('.')
//         result.push(arr[arr.length-1])
//     }
//     return result
// }
// console.log(getExtension(['code.html','code.css']))
// console.log(getExtension(['project1.jpg','project1.pdf','project1.mp3']))
// console.log(getExtension(['ruby.rb','cplusplus.cpp','python.py','javascript.js']))





// Google Full length 
// const googlify = num =>
// {
//     let char = 'o'
//     if(num > 1)
//     {return 'G' + char.repeat(num) + 'gle'}
//     else{return 'invalid'}
// }
// console.log(googlify(10))
// console.log(googlify(23))
// console.log(googlify(2))
// console.log(googlify(-2))



// Repeating letters n times
// const repeat = (str,num) =>
// {
//     let result = ''
//     for(let i = 0 ;i < str.length;i++){result = result + str[i].repeat(num)}
//     return result
// }
// console.log(repeat('mice', 5))
// console.log(repeat('hello', 3))
// console.log(repeat('stop', 1))



// Palindrome
// const checkPalindrome = str =>
// {
//     if(str == str.split('').reverse().join('')){return true}
//     else{return false}
// }
// console.log(checkPalindrome('mom'))
// console.log(checkPalindrome('scary'))
// console.log(checkPalindrome('reviver'))
// console.log(checkPalindrome('stressed'))