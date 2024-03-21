/**
 * Given an array of strings, group the anagrams together. You can return the answer in any order.
 * Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["bat"], ["nat","tan"], ["ate","eat","tea"]]
 */
function findGroupedAnagrams(strArr) {
  // Step 1: Initialize a Map to hold the groups of anagrams
  let groupedAnagram = new Map();

  // Step 2: Iterate over each string in the input array
  strArr.forEach((str) => {
    // Sort the string to use as a key
    let sortedStr = str.split("").sort().join("");

    // Step 3: Group anagrams together using the map
    if (groupedAnagram.has(sortedStr)) {
      groupedAnagram.get(sortedStr).push(str);
    } else {
      groupedAnagram.set(sortedStr, [str]);
    }
  });

  // Step 4: Extract and return the grouped anagrams
  return Array.from(groupedAnagram.values());
}


findGroupedAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // Output: [["bat"], ["nat","tan"], ["ate","eat","tea"]]

// Analysis of Sorting-Based Implementation
// 1. Iterating Over Each String: The outer loop iterates over each string in the input list. If n is the number of strings, this part is O(n).

// 2. Sorting Each String: Each string is sorted individually. The time complexity of sorting depends on the length of the strings. 
// Let's assume the average length of the strings is k. The JavaScript V8 engine (used by Chrome and Node.js) implements the sorting algorithm 
// as a combination of insertion sort (for small arrays) and Tim sort (a hybrid sorting algorithm derived from merge sort and insertion sort) for larger arrays. 
// The worst-case time complexity of sorting an array is O(k log k).

// 3. Constructing a Key and Updating the Map: Constructing the key (by joining the sorted characters) and updating the map has a cost, 
// but this is generally linear with respect to the length of the strings, so O(k) for constructing the key and O(1) for map insertion 
// (assuming hash table insertions are average O(1)).

// Putting it all together, the operation inside the loop that dominates the time complexity is the sorting of each string, which is O(k log k). 
// Since we perform this operation for each of the n strings, the overall time complexity is O(n * k log k).

// Why It's Not O(n^2)
// The confusion might arise from misunderstanding the nested operations. The critical point is that the "nested" operation here (sorting) does not 
// iterate over all n elements but instead operates on individual strings of average length k. Hence, the time complexity is not O(n^2) but O(n * k log k), 
// where n is the number of strings and k is the average length of those strings.
// It’s important to distinguish between operations that are nested over the same set of elements and those that operate on different dimensions 
//(in this case, the number of strings vs. the length of each string).

// Conclusion
// The key insight is to recognize the two variables at play: n, the number of strings, and k, the average length of the strings. 
// The sorting of each string is the most computationally expensive part of the algorithm, leading to the overall time complexity 
// of O(n * k log k). This complexity is generally more efficient than a naive approach that might involve comparing each string with every other string, 
// especially for large datasets with relatively short strings.
