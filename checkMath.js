const checkMath = (n) => {
  const correct_spacing = n.split(' ').length - 1 % n.split(' ').length - 1 == 0
  if ((/[a-z]/i.test(n)) || (correct_spacing) && n.length != 1) {
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n.length == 1){
    return [n, parseInt(n)]
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;