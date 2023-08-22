export function sum(numbers: number[]): number {
    return numbers.reduce((previous, current) => previous + current);
}

export function average(numbers: number[]): number {
    if (numbers.length <= 0) {
        throw Error("Don't try to divide by 0, it's very dangerous!")
    }
    return sum(numbers) / numbers.length;
}