function formatPerson(info: [string, number]): string {
    const [name, age] = info;

    return `Hello, my name is ${name} and my age is ${age}`; // info[0] , info[1]
}

console.log(formatPerson(['Ivan', 20]));
 