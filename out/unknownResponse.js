"use strict";
function getResponse(data) {
    if (data.value && typeof data.value === 'string') {
        return data.value;
    }
    return '-';
}
console.log(getResponse({ code: 200, text: 'Ok', value: [1] }));
//# sourceMappingURL=unknownResponse.js.map