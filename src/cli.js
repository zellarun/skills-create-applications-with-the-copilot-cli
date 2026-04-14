#!/usr/bin/env node
// CLI wrapper for the calculator module
// Supports: addition (+, add), subtraction (-, sub), multiplication (×, *, mul), division (÷, /, div)

const path = require('path');
const { compute } = require('./calculator');

function usage() {
  const bin = path.basename(process.argv[1]);
  console.log(`Usage: ${bin} <operation> <numberA> <numberB>`);
  console.log('\nOperations supported: +, add, -, sub, *, x, ×, mul, /, div, ÷');
  console.log('\nExamples:');
  console.log(`  ${bin} + 2 3      # 5`);
  console.log(`  ${bin} mul 4 5    # 20`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 3 || ['-h', '--help', 'help'].includes(args[0])) {
    usage();
    process.exit(args.length === 0 ? 0 : 1);
  }

  const [op, a, b] = args;
  try {
    const result = compute(op, a, b);
    // Print result only
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    usage();
    process.exit(2);
  }
}

main();
