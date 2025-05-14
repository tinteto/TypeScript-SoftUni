"use strict";
function summarizeInfo(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    let fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    let hobbiesStr = hobbies ? hobbies.join(', ') : '-';
    let workInfoStr = workInfo ? workInfo.join(' -> ') : '-';
    return [id, fullName, age, hobbiesStr, workInfoStr];
}
console.log(summarizeInfo(21, 'Joseph', 'Angler', 28));
//# sourceMappingURL=summarizePerson.js.map