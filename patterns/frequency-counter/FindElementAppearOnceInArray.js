/**
 * Given an integer array nums where each element appears twice except 
 * for one element which appears only once, write a function to find 
 * and return the element that appears only once.
 * @param {*} arr 
 * @returns 
 */
function findElementAppearOnce(arr) {
    let lookup = {}

    for(let num of arr) {
        lookup[num] = ( lookup[num] || 0 ) + 1
    }

    for(let num in lookup) {
        if(lookup[num] == 1) {
            return num;
        }
    }

    return null;
}

findElementAppearOnce([2,2,1]) // 1
findElementAppearOnce([4,1,2,1,2]) // 4
findElementAppearOnce([1]) // 1