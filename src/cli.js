#!/usr/bin/env node
// CLI wrapper for the calculator module
// Supports: addition (+, add), subtraction (-, sub), multiplication (×, *, mul), division (÷, /, div), modulo (%), power (^), square root (sqrt)

const path = require('path');
const { compute } = require('./calculator');

function usage() {
  const bin = path.basename(process.argv[1]);
  console.log(`Usage:`);
  console.log(`  ${bin} <operation> <numberA> <numberB>   # binary operations`);
  console.log(`  ${bin} <operation> <number>             # unary operations (sqrt)`);
  console.log('\nOperations supported: +, add, -, sub, *, x, ×, mul, /, div, ÷, %, mod, ^, pow, sqrt, √');
  console.log('\nExamples:');
  console.log(`  ${bin} + 2 3      # 5`);
  console.log(`  ${bin} mul 4 5    # 20`);
  console.log(`  ${bin} sqrt 9     # 3`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2 || args.length > 3 || ['-h', '--help', 'help'].includes(args[0])) {
    usage();
    process.exit(args.length === 0 ? 0 : 1);
  }

  const [op, a, b] = args;
  try {
    const result = (typeof b === 'undefined') ? compute(op, a) : compute(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    usage();
    process.exit(2);
  }
}

main();
