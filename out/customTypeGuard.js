"use strict";
function isNonEmptyStringArr(value) {
    return (Array.isArray(value) &&
        value.length > 0 &&
        value.every(item => typeof item === 'string'));
}
console.log(isNonEmptyStringArr(['a', 'b', 123]));
// Type Guard Example 
// function isNumber(val: unknown): val is number {
//     return typeof val === 'number';
// }
// function formatData(a: string | number, b: string | number) {
//     if (isNumber(a) && isNumber(b)) {
//         console.log(a + b);
//     } else {
//         console.log(`${a}<->${b}`);
//     }
// }
//# sourceMappingURL=customTypeGuard.js.map