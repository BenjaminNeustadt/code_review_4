const valid = (text) => {
  var single_character = text.length == 1
  var two_spaces = /\d+\s.\s\d+/.test(text)
  var correct_spacing = two_spaces || single_character
  var no_letter = (/[^a-z]/i.test(text))
  var bad_spacing = /\../.test(text)
  var joined_symbols = /[)+-\/][(+-\/]/.test(text)

  return no_letter && correct_spacing && !joined_symbols
}

const checkMath = (number) => {
  if (valid(number)) {
    return [number, parseFloat(eval(number).toFixed(2))];
  } else {
    return "Input must be a valid mathematical string separated by spaces";
  }
}

module.exports = checkMath;

