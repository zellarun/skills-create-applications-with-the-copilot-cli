const { add, subtract, multiply, divide, compute, mod, power, sqrt } = require('../calculator');

describe('calculator basic operations', () => {
  test('adds numbers (2 + 3 and aliases)', () => {
    expect(add(2, 3)).toBe(5);
    expect(compute('+', 2, 3)).toBe(5);
    expect(compute('add', '2', '3')).toBe(5);
  });

  test('subtracts numbers (10 - 4 and aliases)', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(compute('-', 10, 4)).toBe(6);
    expect(compute('sub', '10', '4')).toBe(6);
  });

  test('multiplies numbers (45 * 2 and aliases)', () => {
    expect(multiply(45, 2)).toBe(90);
    expect(compute('*', 45, 2)).toBe(90);
    expect(compute('x', '45', '2')).toBe(90);
    expect(compute('mul', 45, 2)).toBe(90);
  });

  test('divides numbers (20 / 5 and aliases)', () => {
    expect(divide(20, 5)).toBe(4);
    expect(compute('/', 20, 5)).toBe(4);
    expect(compute('div', '20', '5')).toBe(4);
  });

  test('modulo operation', () => {
    expect(mod(10, 3)).toBe(1);
    expect(compute('%', 10, 3)).toBe(1);
    expect(compute('mod', '10', '3')).toBe(1);
  });

  test('power operation', () => {
    expect(power(2, 3)).toBe(8);
    expect(compute('^', 2, 3)).toBe(8);
    expect(compute('pow', '3', '2')).toBe(9);
  });

  test('square root (unary)', () => {
    expect(sqrt(9)).toBe(3);
    expect(compute('sqrt', 9)).toBe(3);
    expect(compute('√', '16')).toBe(4);
  });
});

describe('edge cases and validation', () => {
  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow(/Division by zero/);
    expect(() => compute('/', 1, 0)).toThrow(/Division by zero/);
  });

  test('modulo by zero throws', () => {
    expect(() => compute('%', 1, 0)).toThrow(/Division by zero/);
  });

  test('square root of negative throws', () => {
    expect(() => sqrt(-1)).toThrow(/Square root of negative number/);
    expect(() => compute('sqrt', -4)).toThrow(/Square root of negative number/);
  });

  test('invalid numbers throw', () => {
    expect(() => compute('+', 'a', 1)).toThrow(/Not a number/);
    expect(() => compute('*', 2, 'b')).toThrow(/Not a number/);
  });

  test('unsupported operation throws', () => {
    expect(() => compute('@@', 2, 3)).toThrow(/Unsupported operation/);
  });
});
