type httpCode = {
    code: 200 | 201 | 301,
    text: string,
}

type httpCodeWithPrinting = {
    code: 400 | 404 | 500,
    text: string,
    printChars?: number,
}


function httpCodes(httpCode: httpCode | httpCodeWithPrinting) {
if('printChars' in httpCode) {
    console.log(httpCode.text.slice(0, httpCode.printChars));
    
} else {
    console.log(httpCode.text);
    
}
}

httpCodes({ code: 200, text: 'OK'});
httpCodes({ code: 400, text: 'Bad Request', printChars: 4});