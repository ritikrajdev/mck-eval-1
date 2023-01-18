const {getFrames, getScore} = require('./bowling');

describe('getScore', () => {
  test('1', () => {
    expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });

  test('2', () => {
    expect(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
  });

  test('3', () => {
    expect(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
  });

  test('error when not an array', () => {
    expect(() => {getScore('a');}).toThrow(TypeError);
  });

  test('error when not an array of numbers', () => {
    expect(() => {getScore(['a']);}).toThrow(TypeError);
  });

  test('error when invalid game / inputs', () => {
    expect(() => {getScore([6, 4, 3, 0, 0]);}).toThrow(Error);
  });
});

// describe('getFrames', () => {
// 	test('_', () => {
// 		expect(getFrames([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
// 	})

// 	test('_', () => {
// 		expect(getFrames([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
// 	})

// 	test('_', () => {
// 		expect(getFrames([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual();
// 	})
// })
