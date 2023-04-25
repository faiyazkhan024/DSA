/*
Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.

Note:-
  - If the strings are anagrams you have to return True or else return False

  - |s| represents the length of string s.

Example 1:
  Input:a = faiyazkhan, b = khanfaiyaz
  Output: YES
  Explanation: Both the string have same characters with same frequency. So, both are anagrams.

Example 2:
  Input:a = allergy, b = allergic
  Output: NO
  Explanation: Characters in both the strings are not same, so they are not anagrams.
*/

function isAnagram(str1, str2) {
  const length1 = str1.trim().length;
  const length2 = str2.trim().length;
  const lentIsZero = length1 === 0 || length2 === 0;
  const unequalLength = length1 !== length2;

  if (lentIsZero || unequalLength) return false;

  const str1map = {};
  const str2map = {};

  for (let i = 0; i < length1; i++) {
    if (!str1map[str1[i]]) {
      str1map[str1[i]] = 1;
    } else {
      str1map[str1[i]]++;
    }

    if (!str2map[str2[i]]) {
      str2map[str2[i]] = 1;
    } else {
      str2map[str2[i]]++;
    }
  }

  for (let [key, value] of Object.entries(str1map)) {
    if (str2map[key] !== value) {
      return false;
    }
  }

  return true;
}
