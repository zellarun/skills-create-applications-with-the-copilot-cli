/**
 * Simple calculator module
 * Supported operations:
 * - Addition: +, add
 * - Subtraction: -, sub
 * - Multiplication: ×, x, *, mul
 * - Division: ÷, /, div
 */

function toNumber(v) {
  const n = Number(v);
  if (Number.isNaN(n)) throw new Error(`Not a number: ${v}`);
  return n;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function normalizeOp(op) {
  if (!op) return null;
  const o = String(op).trim().toLowerCase();
  if (['+', 'add'].includes(o)) return 'add';
  if (['-', 'sub', 'subtract'].includes(o)) return 'subtract';
  if (['*', 'x', '×', 'mul', 'multiply'].includes(o)) return 'multiply';
  if (['/', '÷', 'div', 'divide'].includes(o)) return 'divide';
  return null;
}

function compute(op, a, b) {
  const oper = normalizeOp(op);
  if (!oper) throw new Error(`Unsupported operation: ${op}`);
  const A = toNumber(a);
  const B = toNumber(b);
  switch (oper) {
    case 'add':
      return add(A, B);
    case 'subtract':
      return subtract(A, B);
    case 'multiply':
      return multiply(A, B);
    case 'divide':
      return divide(A, B);
    default:
      throw new Error(`Unsupported operation after normalization: ${oper}`);
  }
}

module.exports = { add, subtract, multiply, divide, compute };
