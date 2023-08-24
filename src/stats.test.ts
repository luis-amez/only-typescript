import { average, sum } from "./stats";
import * as statsAsync from "./statsAsync";
import { expect, test } from "./testLib";

test("sum returns the sum of all the elements of the array", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
})

test("average returns the average of all the elements of the array", () => {
    const result = average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
})

test("sum (async) returns the sum of all the elements of the array", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
})

test("average (async) returns the average of all the elements of the array", async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
})

