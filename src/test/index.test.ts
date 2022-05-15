import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { hello } from '..';

test('check function', () => {
  assert.type(hello, 'function');
});

test.run();
