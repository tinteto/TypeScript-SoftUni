function getResponse(data: {code: number, text: string, value?: unknown}): string {
if(data.value && typeof data.value === 'string') {
    return data.value; 
}
    return '-';

}
console.log(getResponse({ code: 200, text: 'Ok', value: [1] }));
 