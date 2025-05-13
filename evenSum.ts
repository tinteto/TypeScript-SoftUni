function evenSum(num1: number, num2: number, num3: number): boolean {
let sum: number = num1 + num2 + num3;
let isEven: boolean = false;

    if(sum % 2 === 0) {
    return isEven = true;
    } else {
    return isEven = false;
    }
}

console.log(evenSum(2,2,3));
