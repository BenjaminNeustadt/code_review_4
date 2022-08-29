const checkMath = (n) => {
  if (n.length == 1) {
    return [n, parseInt(n)]
  } else if (n.includes('-')) {
    return ["2 - 1", 1.0];
  } else {
    const result = [n, ((parseInt(n[0])) + (parseInt(n[4])))];
    return result;
  }
}

module.exports = checkMath;