const palindromes = function (str) {
  const arr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .join("");
  const reverse = arr.split("").reverse().join("");
  return arr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
