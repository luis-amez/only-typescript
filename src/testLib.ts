export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (result !== expected) {
                throw new Error(`Result: ${result} is not equal to expected: ${expected}.`);
            }
        }
    };
}

export async function test(description: string, callback: () => void) {
    try {
        await callback();
        console.log(`✅ - ${description}`);
    } catch (error) {
        console.log(`❌ - ${description}`);
        console.log(error);
    }
}

export const it = test;

export async function describe(description: string, callback: () => void) {
    console.log(description);
    callback();
}