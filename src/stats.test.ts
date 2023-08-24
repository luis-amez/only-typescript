import { average, sum } from "./stats";
import * as statsAsync from "./statsAsync";
import { describe, expect, it, test } from "./testLib";

describe("stats should", () => {
    test("return the sum of all the elements of the array with function sum", () => {
        const result = sum([1, 2, 3]);
        const expected = 6;

        expect(expected).toBe(result);
    })

    test("return the average of all the elements of the array with function average", () => {
        const result = average([1, 2, 3]);
        const expected = 2;

        expect(expected).toBe(result);
    })
})

describe("statsAsync should", () => {
    test("return the sum of all the elements of the array with function sum", async () => {
        const result = await statsAsync.sum([1, 2, 3]);
        const expected = 6;

        expect(expected).toBe(result);
    })

    test("return the average of all the elements of the array with function average", async () => {
        const result = await statsAsync.average([1, 2, 3]);
        const expected = 2;

        expect(expected).toBe(result);
    })
})
