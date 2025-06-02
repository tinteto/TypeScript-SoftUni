function getResponse(data: unknown): string {
// if(data.value && typeof data.value === 'string') {
//     return data.value; 
// }
//     return '-';

if((data as any).hasOwnProperty('value') && typeof (data as any).value === 'string') {
return (data as any).value;
} 
    return '-';

}
console.log(getResponse({ code: 200, text: 'Ok', value: 'Pesho' }));
 