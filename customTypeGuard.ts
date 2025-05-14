function isNonEmptyStringArr(value: unknown): value is string[] {
                                            //type predicate - if this function returns true, 
                                            //then you can safely treat the parameter as this specific type
return ( 
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(item => typeof item === 'string')
);
}

console.log(isNonEmptyStringArr(['a', 'b', 123]));