const checkMath = (n) => {
  if (n == "1"){
    return ["1", 1.0];
  } else {
    return ["1 + 1", 2.0];
  }
}

module.exports = checkMath;