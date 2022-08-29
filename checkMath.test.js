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

  it('returns for multiplication 1', () => {
    expect(checkMath("2 * 1")).toStrictEqual(["2 * 1", 2.0])
  })

  it('returns for multiplication 6', () => {
    expect(checkMath("2 * 6")).toStrictEqual(["2 * 6", 12.0])
  })

  it('returns for negative numbers', () => {
    expect(checkMath("2 - 6")).toStrictEqual(["2 - 6", -4.0])
  })

  it('returns for floats numbers', () => {
    expect(checkMath("2.57 + 1.2")).toStrictEqual(["2.57 + 1.2", 3.77])
  })

  it('returns single number for 0', () => {
    expect(checkMath("0")).toStrictEqual(["0", 0.0])
  })
})