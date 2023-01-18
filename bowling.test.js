const {getBestScore, getScore} = require('./bowling');

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


describe('getBestScore', () => {
  test('1', () => {
    expect(getBestScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(9);
  });

  test('2', () => {
    expect(getBestScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
  });

  test('3', () => {
    expect(getBestScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(13);
  });

  test('error when not an array', () => {
    expect(() => {getBestScore('a');}).toThrow(TypeError);
  });

  test('error when not an array of numbers', () => {
    expect(() => {getBestScore(['a']);}).toThrow(TypeError);
  });

  test('error when invalid game / inputs', () => {
    expect(() => {getBestScore([6, 4, 3, 0, 0]);}).toThrow(Error);
  });
});
