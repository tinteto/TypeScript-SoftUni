"use strict";
function performOperation(param, operation, operand) {
    if ((operation === "Index" && (typeof param === "string" ||
        Array.isArray(param)))) {
        return param[operand];
    }
    else if ((operation === "Length" && (typeof param === "string" ||
        Array.isArray(param)))) {
        return param.length % operand;
    }
    else if (operation === "Add" && (typeof param === "string" || typeof param === "number")) {
        return operand + Number(param);
    }
}
console.log(performOperation(['Just', 'Two'], 'Length', 5));
//# sourceMappingURL=operator.js.map