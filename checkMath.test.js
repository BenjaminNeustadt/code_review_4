const checkMath = require('./checkMath')

describe ('checkMath', () => {
  it('returns a single number', () => {
    expect(checkMath("1")).toStrictEqual(["1", 1.0])
  })
  
  it('returns a sum of two equal numbers', () => {
    expect(checkMath("1 + 1")).toStrictEqual(["1 + 1", 2.0])
  })

  it('returns a sum number', () => {
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

  it('works for bigger numbers with decimals', () => {
    expect(checkMath("47.2 * 13.3")).toStrictEqual(["47.2 * 13.3", 627.76])
  })
  // negative numbers
  it('returns for negative numbers', () => {
    expect(checkMath("2 - 6")).toStrictEqual(["2 - 6", -4.0])
  })
  // floats
  it('returns for floats numbers', () => {
    expect(checkMath("2.57 + 1.2")).toStrictEqual(["2.57 + 1.2", 3.77])
  })

  it('returns single number for 0', () => {
    expect(checkMath("0")).toStrictEqual(["0", 0.0])
  })
  // Throwing Errors
  it('throws error if not valid format (single)', () => {
    expect(checkMath("a")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })
  
  it('throws error if not valid format (numerous)', () => {
    expect(checkMath("a + b")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  it('throws error if not valid format (numerous, longer)', () => {
    expect(checkMath("hello + goodbye")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  it('throws error if not valid format (first character number, second letter)', () => {
    expect(checkMath("1 + a")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  it('throws error if not valid format (not correct spacing)', () => {
    expect(checkMath("1+1")).toStrictEqual("Input must be a valid mathematical string separated by spaces")
  })

  it('returns when expression inside paranthesis)', () => {
    expect(checkMath("(1 + 1)")).toStrictEqual(["(1 + 1)", 2.0])
  })

  

})