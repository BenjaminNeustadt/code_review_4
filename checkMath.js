const checkMath = (n) => {
  const has_space = (/\s/.test(n))
  const has_letters = (/[a-z]/i.test(n))
  const incorrect_spacing = (n.split(' ').length - 1) % 2 == 1 || !(has_space)
  if (has_letters || (incorrect_spacing) && n.length != 1){
    return "Input must be a valid mathematical string separated by spaces";
  } else if (n.length == 1){
    return [n, parseInt(n)]
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;
