/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 1) {
        const doubled = [...numbers, ...numbers];
        return doubled;
    } else if (numbers.length > 1) {
        const firstLast = [numbers[0], numbers[numbers.length - 1]];
        return firstLast;
    } else {
        return numbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);

    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringToNumbers = numbers.map((number: string): number =>
        Number(number),
    );
    const fixed = stringToNumbers.map((fix: number): number =>
        isNaN(fix) ? 0 : fix,
    );

    return fixed;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // if string includes the '$' symbol, remove it and replace it with emptyspace, else, add as is
    const noSymbol = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.replace(/\$/, "") : amount,
    );
    // if string === NaN when parsed as an int, parse as 0, else, parse as int
    const stringToNumbers = noSymbol.map((number: string): number =>
        Number(number),
    );
    const fixed = stringToNumbers.map((fix: number): number =>
        isNaN(fix) ? 0 : fix,
    );

    return fixed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    const shouted = noQuestion.map((shout: string): string =>
        shout.includes("!") ? shout.toUpperCase() : shout,
    );
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const mapped = words.map((word: string): number =>
        word.length < 4 ? 1 : 0,
    );
    const sum = mapped.reduce(
        (current: number, num: number) => current + num,
        0,
    );

    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const chosen = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return chosen;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (current: number, num: number) => current + num,
        0,
    );
    let added = addends.join("+");
    if (addends.length === 0) {
        added = "0";
    }

    const equation = sum + "=" + added;
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copy = [...values];
    const firstNeg = copy.findIndex((value: number): boolean => value < 0);
    if (firstNeg === -1) {
        const sum = copy.reduce(
            (current: number, num: number) => current + num,
            0,
        );
        copy.push(sum);
        return copy;
    }
    //slices a sub array from index 0 to the index before the first negative number. 
    const toAdd = values.slice(0, firstNeg);
    const sum = toAdd.reduce(
        (current: number, num: number) => current + num,
        0,
    );
    copy.splice(firstNeg + 1, 0, sum);
    return copy;
}
