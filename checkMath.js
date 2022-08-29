const checkMath = (n) => {
  const has_space = (/\s/.test(n))
  const has_letters = (/[a-z]/i.test(n))
  const one_chars = n.length == 1
  const uneven_space = (n.split(' ').length - 1) % 2 == 1
  const incorrect_spacing = uneven_space || !(has_space)
  if (has_letters || (incorrect_spacing) && !one_chars){
    return "Input must be a valid mathematical string separated by spaces";
  } else {
    const result = [n, parseFloat(eval(n).toFixed(2))];
    return result;
  }
}

module.exports = checkMath;
