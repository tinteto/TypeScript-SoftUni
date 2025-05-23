"use strict";
function optionalMultiplier(par1, par2, par3) {
    let num1 = par1 == undefined ? 1 : Number(par1);
    let num2 = par2 == undefined ? 1 : Number(par2);
    let num3 = par3 == undefined ? 1 : Number(par3);
    return num1 * num2 * num3;
}
console.log(optionalMultiplier());
//# sourceMappingURL=optionalMultiplier.js.map