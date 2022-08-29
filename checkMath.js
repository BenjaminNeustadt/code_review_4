const checkMath = (n) => {
  const incorrect_spacing = (n.split(' ').length - 1) % 2 == 1 || !(/\s/.test(n))
  if ((/[a-z]/i.test(n)) || (incorrect_spacing) && n.length != 1){
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n.length == 1){
    return [n, parseInt(n)]
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;


// this incorrect_spacing is not catching the 1 +3