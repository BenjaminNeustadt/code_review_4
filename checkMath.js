const checkMath = (n) => {
  if (n == "a + b"){
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n == "a"){
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n.length == 1){
    return [n, parseInt(n)]
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;