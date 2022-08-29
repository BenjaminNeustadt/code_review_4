const checkMath = (n) => {
  if (n.length == 1) {
    return [n, parseInt(n)]
  } else {
    const result = [n, (parseFloat(eval(n).toFixed(2)))];
    return result;
  }
}

module.exports = checkMath;