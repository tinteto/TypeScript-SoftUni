function optionalMultiplier(
    par1?: string | number, 
    par2?: string | number, 
    par3?: string | number) : number {

let num1 = par1 == undefined ? 1 : Number(par1);
let num2 = par2 == undefined ? 1 : Number(par2);
let num3 = par3 == undefined ? 1 : Number(par3);

return num1 * num2 * num3;

}
console.log(optionalMultiplier());
