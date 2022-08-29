const checkMath = (n) => {
  if (!parseInt(n[0]) && n != "0"){
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n.length == 1){
    return [n, parseInt(n)]
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;