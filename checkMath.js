const checkMath = (n) => {
  if (n.length == 1) {
    return [n, parseInt(n)]
  } else {
    const result = [n, (Math.round(eval(n) * 100) / 100)];
    return result;
  }
}

module.exports = checkMath;