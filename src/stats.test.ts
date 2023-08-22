import { average, sum } from "./stats";

let result = sum([1,2,3])
let expected = 6;

if (result === expected) {
    console.log("✅");
} else {
    throw new Error(`❌ result: ${result} is not equal to expected: ${expected}.`)
}

result = average([1,2,3])
expected = 2;

if (result === expected) {
    console.log("✅");
} else {
    throw new Error(`❌ result: ${result} is not equal to expected: ${expected}.`)
}