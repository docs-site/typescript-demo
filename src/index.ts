/** =====================================================
 * Copyright © hk. 2022-2025. All rights reserved.
 * File name  : index.ts
 * Author     : 苏木
 * Date       : 2025-06-13
 * Version    :
 * Description:
 * ======================================================
 */

function testPrettier(input: number): string {
  try {
    if (input > 0) {
      return 'Positive';
    } else if (input < 0) {
      throw new Error('Negative');
    }
    return 'Zero';
  } catch (err) {
    console.error(err);
    return 'Error';
  }
}

const message: string = 'Hello, World!';
console.log(message);
console.log(testPrettier(5));
