const checkMath = (n) => {
  if (n.length == 1) {
    return [n, parseInt(n)]
  } else {
    const result = [n, (eval(n))];
    return result;
  }
}

module.exports = checkMath;