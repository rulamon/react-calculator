export const numberObjects = [{"0": "zero"}, {"1": "one"}, {"2": "two"}, {"3": "three"}, {"4": "four"}, {"5": "five"}, {"6": "six"}, {"7": "seven"}, {"8": "eight"}, {"9": "nine"}];
export const operatorObjects = [{"+": "add"}, {"-":"subtract"}, {"*":"multiply"}, {"/":"divide"}];
export const numbersArray = numberObjects.map(object => Object.keys(object)[0]);
export const operatorsArray = operatorObjects.map(object => Object.keys(object)[0]);
