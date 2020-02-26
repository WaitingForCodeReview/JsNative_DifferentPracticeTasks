/*
The goal of this exercise is to convert a string to
a new string where each character in the new string
is "(" if that character appears only once in the original
string, or ")" if that character appears more than once
in the original string. Ignore capitalization when determining
if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
 */

function duplicateEncode(word){
    let letters = word.toLowerCase();
    let count = [];
    for(let i = 0; i < letters.length; i++)
    {
        count[i] = 0;
        for(let j = 0; j < letters.length; j++)
        {
            if(letters[i] == letters[j])
            {
                count[i]++;
            }
        }
    }
    let encoded = "";
    count.forEach((item) => {
        if(item > 1) encoded = encoded + ')';
        else encoded = encoded + '(';
    });
    return encoded;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("JS is CoOl !!!"));


