const checkMath = require('./checkMath')

describe ('checkMath', () => {

  it('returns a single number', () => {
    expect(checkMath("1")).toStrictEqual(["1", 1.0])
  })

  it('returns single number for 0', () => {
    expect(checkMath("0")).toStrictEqual(["0", 0.0])
  })

  it('checks for equal spacing between two values with symbol inbetween', () => {
    expect(checkMath("1 + 1")).toStrictEqual(["1 + 1", 2.0])
  })

  it('returns the sum of two numbers', () => {
    expect(checkMath("2 + 2")).toStrictEqual(["2 + 2", 4.0])
  })

  it('returns for substraction', () => {
    expect(checkMath("2 - 1")).toStrictEqual(["2 - 1", 1.0])
  })

  // multiplication

  it('returns for multiplication 1', () => {
    expect(checkMath("2 * 1")).toStrictEqual(["2 * 1", 2.0])
  })

  it('returns for multiplication 6', () => {
    expect(checkMath("2 * 6")).toStrictEqual(["2 * 6", 12.0])
  })

  it('works for bigger numbers', () => {
    expect(checkMath("47 * 52")).toStrictEqual(["47 * 52", 2444])
  })

  it('works for floating point numbers', () => {
    expect(checkMath("47.2 * 13.3")).toStrictEqual(["47.2 * 13.3", 627.76])
  })

  // negative numbers

  it('returns for negative sum', () => {
    expect(checkMath("2 - 6")).toStrictEqual(["2 - 6", -4.0])
  })

  // floats

  it('returns sum of floats', () => {
    expect(checkMath("2.57 + 1.2")).toStrictEqual(["2.57 + 1.2", 3.77])
  })

  it('returns when expression inside paranthesis', () => {
    expect(checkMath("(1 + 1)")).toStrictEqual(["(1 + 1)", 2.0])
  })

  it('returns for complex expressions', () => {
    expect(checkMath("(1 + 3) * 4")).toStrictEqual(["(1 + 3) * 4", 16.0])
  })

  // edge cases

  it('returns for complex expressions', () => {
    expect(checkMath("(1 + 3 + 4) * 3")).toStrictEqual(["(1 + 3 + 4) * 3", 24.0])
  })

  // Throwing Errors
  // LETTERS

  xit('throws error if not correct spacing', () => {
    expect(checkMath("1+1")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error if contains one letter', () => {
    expect(checkMath("a")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error if not valid format (numerous)', () => {
    expect(checkMath("a + b")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error if not valid format (numerous, longer)', () => {
    expect(checkMath("hello + goodbye")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error if not valid format (first character number, second letter)', () => {
    expect(checkMath("1 + a")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error for malformed complex expressions', () => {
    expect(checkMath("(1 +3)")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('throws error for bad spacing', () => {
    expect(checkMath("((1 + 3)+ 4) * 3")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('last edge case for invalid symbols', () => {
    expect(checkMath("(( 1+ 4)")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  xit('returns for negative numbers', () => {
    expect(checkMath("-2 - 6")).toStrictEqual(["2 - 6", -8.0])
  })

})
