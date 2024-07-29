const player = 'virat',vowels = 'aeiou'
let count = 0
for(let i = 0; i < player.length; i++)
{
    if(vowels.includes(player[i]))
    {
        count++
    }
    console.log(count)
}