// Your goal is to create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. You can choose to have your function return null or simply ignore.

function trimString(str) {
    const input = str.toString().trim();
    const result = input.length > 2 && input.slice(1, input.length - 1);
    return result;
}

console.log(trimString(12345));
console.log(trimString('            12345            '));