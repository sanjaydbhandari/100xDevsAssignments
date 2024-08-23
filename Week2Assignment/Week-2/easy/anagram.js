function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

let str1 = "nitin";
let str2 = "tinin";
if (isAnagram(str1, str2)) {
  console.log(`${str1} and ${str2} are anagrams`);
} else {
  console.log(`${str1} and ${str2} are not an anagrams`);
}

module.exports = isAnagram;
