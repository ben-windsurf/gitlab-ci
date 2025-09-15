import assert from 'node:assert';
import { add } from './index.js';

assert.strictEqual(add(2, 2), 4, '2+2 should equal 4');
console.log('All tests passed!');
