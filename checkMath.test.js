const checkMath = require('./checkMath')

describe ('checkMath', () => {
  it('returns a single number', () => {
    expect(checkMath("1")).toStrictEqual(["1", 1.0])
  })


})