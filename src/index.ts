/** =====================================================
 * Copyright © hk. 2022-2025. All rights reserved.
 * File name  : index.ts
 * Author     : 苏木
 * Date       : 2025-06-13
 * Version    :
 * Description:
 * ======================================================
 */

/**
 * @brief 根据输入数字返回字符串表示
 * @param input 输入的数字
 * @return 字符串结果：'Positive'（正数）、'Zero'（零）、'Error'（错误）
 * @throws 当输入为负数时抛出 Error('Negative')
 */
export function testPrettier(input: number): string {
  try {
    if (input > 0) {
      return 'Positive';
    } else if (input < 0) {
      throw new Error('Negative'); // 此行会爆出错误，中断程序执行
    }
    return 'Zero';
  } catch (err) {
    console.error(err);
    return 'Error';
  }
}

console.log("=============start===============");
const message: string = 'Hello, World!';
console.log(message);
console.log(testPrettier(5));
console.log(testPrettier(0));
console.log(testPrettier(-5));
console.log("=============end===============");
