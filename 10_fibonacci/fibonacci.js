const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let upTo = parseInt(num);
  let n1 = 0,
    n2 = 1,
    nextTerm;
  nextTerm = n1 + n2;
  for (let i = 0; i < upTo; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
