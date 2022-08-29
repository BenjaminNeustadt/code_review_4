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

})