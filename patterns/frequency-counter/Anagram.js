/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as cinema, formed from iceman.
 */
function validAnagram(str1, str2) {
    if(str1.length != str2.length){
        return false
    }
    if(str1.length == 0 && str2.length) {
        return true
    }

    let str1Obj = {}
    let str2Obj = {}

    for(let char of str1) {
        str1Obj[char] = ( str1Obj[char] || 0 ) + 1;
    }

    for(let char of str2) {
        str2Obj[char] = ( str2Obj[char] || 0 ) + 1;
    }

    for(let key in str1Obj) {
        if(!key in str2Obj) {
            return false;
        }

        if(str1Obj[key] !== str2Obj[key]) {
            return false;
        }
    }

    return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true"