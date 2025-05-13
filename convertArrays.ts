function convertArray(arr: string[]): [string, number] {
let str: string = arr.join('');
let charNum: number = str.length;

return [str, charNum];
}

console.log(convertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
