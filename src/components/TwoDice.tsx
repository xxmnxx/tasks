export {};
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [leftDie, setLeft] = useState<number>(1);
    let [rightDie, setRight] = useState<number>(2);

    function rollLeft(): void {
        setLeft(d6());
    }
    function rollRight(): void {
        setRight(d6());
    }

    return (
        <div>
            <div>Two Dice</div>
            <div>
                <span data-testid="left-die"> Left: {leftDie}</span>
                <Button onClick={rollLeft}> Roll Left </Button>
            </div>
            <div>
                <span data-testid="right-die"> Right: {rightDie}</span>
                <Button onClick={rollRight}> Roll Right </Button>
            </div>
            {leftDie === 1 && rightDie === 1 && <div> Lose </div>}
            {leftDie === rightDie && leftDie !== 1 && <div> Win</div>}
        </div>
    );
}
