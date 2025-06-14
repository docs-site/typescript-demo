import { describe, it } from 'node:test';
import assert from 'node:assert';
import { testPrettier } from '../src/index.ts';

describe('Test: base test', () => {
  it('测试正整数输入 (5)', () => {
    console.log('STEP: 验证输入5时返回"Positive"');
    assert.deepStrictEqual(
      testPrettier(5),
      'Positive'
    );
  });

  it('测试零输入 (0)', () => {
    console.log('STEP: 验证输入0时返回"Zero"');
    assert.deepStrictEqual(testPrettier(0), 'Zero');
  });

  it('测试负整数输入 (-5)', () => {
    console.log('STEP: 验证输入-5时返回"Error"');
    assert.deepStrictEqual(testPrettier(-5), 'Error');
  });
});
