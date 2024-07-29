// // function vowelCount(str)
// // {
// //     let count = 0
// //     const vowel = 'aeiouAEIOU'
// //     for(let i = 0;i < str.length;i++)
// //     {
// //         if(vowel.includes(str[i]))
// //         {
// //             count =count+1
// //         }
// //     }
// //     return count
// // }
// // console.log(vowelCount('bangalore'))
// // console.log(vowelCount('CHennAi'))

// // function detectWord(str)
// // {
// //     let result = ''
// //     for(let i = 0;i < str.length;i++)
// //     {
// //         if(str[i]==str[i].toLowerCase())
// //         {
// //             result = result+str[i]
// //         }
// //     }
// //     return result
// // }
// // console.log(detectWord('UcUGaFGtN'))
// // console.log(detectWord('bEEGBuFBRrHgUHlNFYaYr'))
// // console.log(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment'))
// // console.log(detectWord('ESIJFfSJNOoASDJNFSDFoSDEIHRNSFtASKCBKBKBbASIGaVBRURFlDFl'))
// // console.log(detectWord('CAR'))


// function asciiCapitalize(str)
// {
//     let result = ''
//     for(let i = 0;i < str.length;i++)
//     {
//         const c = str[i]
//         if(c.charCodeAt()%2 == 0)
//         {
//             result += c.toUpperCase()
//         }
//         else
//         {
//             result += c.toLowerCase()
//         }
//     }
//     return result

// }
// console.log(asciiCapitalize('to be or not to be'))
// console.log(asciiCapitalize('THE LITTLE MERMAID'))
// console.log(asciiCapitalize('Oh what a beautiful morning'))


//Finding the unique characters:
function uniqueChar(str)
{
    let result = ''
    for(let i = 0;i < str.length;i++)
    {
        if(!result.includes(str[i]))
        {
            result += str[i]
        }
    }
    return result
}
console.log(uniqueChar('ddccttd'))
console.log(uniqueChar('cccaaarrrcccaaarrr'))

