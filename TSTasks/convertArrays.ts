function convertArray(arr: string[]) : [string, number] {
let str = arr.join('');
let charNum  = str.length;

return [str, charNum];
}

console.log(convertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
