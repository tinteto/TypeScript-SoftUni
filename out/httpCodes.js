"use strict";
function httpCodes(httpCode) {
    if ('printChars' in httpCode) {
        console.log(httpCode.text.slice(0, httpCode.printChars));
    }
    else {
        console.log(httpCode.text);
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 400, text: 'Bad Request', printChars: 4 });
//# sourceMappingURL=httpCodes.js.map