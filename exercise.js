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



// ----------------------------------------EXE-3-------------------------------------------------------------------------------------------------


//Converting objects to array
// const toarray = obj =>Object.entries(obj)
// console.log(toarray({a:1 , b:2}))
// console.log(toarray({'shrimp':15 , 'tots':12}))
// console.log(toarray({}))


//Index multiplier
// const indexMultiplier = arr =>
// {
//     let res = 0
//     arr1 = arr.map((ele,index)=> index*ele)
//     for(let i=0 ; i<arr1.length ; i++){res += arr1[i]}
//     return res
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]))


//Special array
// const isSpecialArray = arr =>
// {
//     let eve = [], odd=[]
//     for(let i=0 ; i<arr.length; i++)
//     {
//         if(arr[2] % 2 != 0 | arr[3] % 2 != 1){return false}
//         else
//         {
//             if(arr[i] % 2 == 0){eve.push(arr[i])}
//             else if(arr[i] % 2 != 0){odd.push(arr[i])}
//         }
//     }
//     return ['Even indices = '+eve, 'Odd indices = '+ odd]
// }
// console.log(isSpecialArray([2,7,4,9,6,1,6,3]))
// console.log(isSpecialArray([2,7,9,1,6,1,6,3]))
// console.log(isSpecialArray([2,7,8,8,6,1,6,3]))



//Match the last element
// const matchLastItem = arr =>
// {
//     let arr1 = '' 
//     for(let i=0 ; i <arr.length-1 ; i++)
//     {
//         arr1 += arr[i]
//     }
//     return arr1 === arr[arr.length-1]
// }
// console.log(matchLastItem(['rsq' , '6hi' , 'g' , 'rsq6hig']))
// console.log(matchLastItem([1 , 1 , 1 , '11']))
// console.log(matchLastItem([8 , 'Thunder' , true , '8Thundertrue']))


//Sum of number elements in an array
// const numberSum = arr =>
// {
//     let sum = 0
//     arr.forEach((ele) => 
//     {
//         if(typeof ele === 'number'){sum += ele}
//     })
//     return sum
// }
// console.log(numberSum([1 , 2 ,'13' , '4' , '645']))
// console.log(numberSum([true , false , '123' , '75']))
// console.log(numberSum([1 , 2 , 3 , 4 , 5 , true]))


//Add its name
// const addName = (obj,str,num) => 
// {
//     obj[str] = num
//     return obj
// }
// console.log(addName({},'Brutus', 300))
// console.log(addName({piano:500},'Brutus', 300))
// console.log(addName({piano:500, stereo:300},'Caligula', 440))




//Return keys and values
// const keysAndValues = obj => [Object.keys(obj),Object.values(obj)]
// console.log(keysAndValues({a:1 , b:2 , c:3}))
// console.log(keysAndValues({a:'Apple' , b:'Microsoft' , c:'Google'}))
// console.log(keysAndValues({key1:true , key2:false , key3:undefined}))



//Return Duplicates
// const removeDups = arr=> [...new Set(arr)]
// console.log(removeDups([1 ,0 ,1 ,0]))
// console.log(removeDups(['The', 'big','cat']))
// console.log(removeDups(['John','Taylor','John']))


//Ageing the population
// const afterNYears = (obj,num) =>
// {
//     for(let key in obj)
//     {
//         obj[key] += num
//     }
//     return obj
// }
// console.log(afterNYears({'Joel': 32, 'Fred':44,'Reqinald':65,'Susan':33,'Julian':13} , 1))
// console.log(afterNYears({'Baby': 2, 'Child':8,'Teenager':15,'Adult':25,'Elderly':71} , 19))
// console.log(afterNYears({'Genie': 1000  , 'Joe':40} , 5))


//Name Score
// const nameScore = str =>
// {
//     let sum = 0
//     const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, 
//         "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, 
//         "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
//     for(let i =0 ; i< str.length; i++){
//         if (str[i] in scores){
//             sum += scores[str[i]]
//         }
//     }
//     if(sum <=60){return "NOT GOOD SCORE"}
//     else if(sum >=61 && sum <= 300){return 'PRETTY SCORE'}
//     else if(sum >=301 && sum <=599){return 'VERY GOOD'}
//     else if(sum >= 600){return 'THE BEST'} 
// }
// console.log(nameScore('YOU'))
// console.log(nameScore('MATT'))
// console.log(nameScore('PUBG'))

//--------------------------------------------------EXE - 4-------------------------------------------------------------------------------------

//Number to reversed array
// const reverseArr = num => num.toString().split('').reverse()
// console.log(reverseArr(1485979))
// console.log(reverseArr(623478))
// console.log(reverseArr(12345))


//Check if all the values are true
// const allTruthy = (...agrs) => agrs.every(x => x)
// console.log(allTruthy(true,true,true))
// console.log(allTruthy(true,false,true))
// console.log(allTruthy(5,4,3,2,1,0))



//Reverse and not
// const reverseAndNot = num => num.toString().split('').reverse().join('') + num
// console.log(reverseAndNot(123))
// console.log(reverseAndNot(152))
// console.log(reverseAndNot(123456789))



//Reverse the Number
// const rev = num => num.toString().split('').reverse().join('')
// console.log(rev(5121))
// console.log(rev(69))
// console.log(rev(-122157))



//Multiply numbers in a string
// const multiplyNums = str => {
//     let pdt = 1
//     for (let i = 0; i < str.length; i++) 
//     {
//         if (!isNaN(str[i])) 
//         {
//             pdt *= parseInt(str[i])
//         }
//     }
//     return pdt
// }
// console.log(multiplyNums('2, 3'))
// console.log(multiplyNums('1, 2, 3, 4'))
// console.log(multiplyNums('54, 75, 453, 0'))
// console.log(multiplyNums('10, -2'))


//Reverse words in string
// const reverseWords = str => str.split(' ').reverse().join(' ')
// console.log(reverseWords(' the sky is blue'))
// console.log(reverseWords('hello world!  '))
// console.log(reverseWords('a good example'))


//Total volume of boxes
// function totalVolume(...obj)
// {
//     let total = 0
//     for(let box of obj)
//     {
//         total += box[0]*box[1]*box[2]   
//     }
//     return total
// }
// console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
// console.log(totalVolume([2,2,2],[2,1,1]))
// console.log(totalVolume([1,1,1]))



//Square every digits
// const squaerDigits = num =>
// {
//     let num1 = num.toString().split('') , sqrt = ''
//     for(let i=0; i<num1.length; i++)
//     {
//         sqrt +=(num1[i]*num1[i])
//     }
//     return sqrt
// }
// console.log(squaerDigits(9119))
// console.log(squaerDigits(2483))
// console.log(squaerDigits(3212))


//Is Robbie making progress?
// const progressDays = (obj) =>
// {
//     let count = 0
//     for(let i=0 ; i<obj.length ; i++)
//     {
//         if(obj[i] < obj[i+1])
//             {count +=1}
//     }
//     return count
// }
// console.log(progressDays([3,4,1,2]))
// console.log(progressDays([10,11,12,9,10]))
// console.log(progressDays([6,5,4,3,2,9]))
// console.log(progressDays([9,9]))
