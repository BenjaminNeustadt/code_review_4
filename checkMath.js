const valid = (text) => {
  var single_character = text.length == 1
  var two_spaces = /\d+\s.\s\d+/.test(text) || /\(\d+\)\s.\s\d+/.test(text)
  var correct_spacing = two_spaces || single_character
  var no_letter = (/[^a-z]/i.test(text))
  var joined_symbols = /[)+-\/][(+-\/]/.test(text)

  return no_letter && correct_spacing && !joined_symbols
}

const checkMath = (expression) => {
  if (valid(expression)) {
    return [expression, parseFloat(eval(expression).toFixed(2))];
  } else {
    return "Input must be a valid mathematical string separated by spaces";
  }
}

module.exports = checkMath;

