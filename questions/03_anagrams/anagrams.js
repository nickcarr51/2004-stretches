// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let strArray1 = str1.split('').sort();
  let strArray2 = str2.split('').sort();
  for (let i = 0; i < strArray1.length; i++) {
    if (strArray1[i] !== strArray2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = { checkAnagrams };
