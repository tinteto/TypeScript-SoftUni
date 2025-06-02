function summarizeInfo
(
    id: number, 
    firstName: string, 
    lastName: string, 
    age: number, 
    middleName?: string, 
    hobbies?: string[], 
    workInfo?: [string, number]
) : (string | number)[] {

let fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;

let hobbiesStr = hobbies ? hobbies.join(', ') : '-';

let workInfoStr = workInfo ?  workInfo.join(' -> ') : '-';


return [id, fullName, age, hobbiesStr, workInfoStr];

}

console.log(summarizeInfo(21, 'Joseph', 'Angler', 28));
 