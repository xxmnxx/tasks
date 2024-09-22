import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    "Christmas🎄",
    "Halloween🦇",
    "New Year🥂",
    "Valentine's Day💌",
    "Thanksgiving🦃",
];

const alphabetical = [...holidays].sort();
const yearlyOrder = [
    "New Year🥂",
    "Valentine's Day💌",
    "Halloween🦇",
    "Thanksgiving🦃",
    "Christmas🎄",
];

export function CycleHoliday(): React.JSX.Element {
    //🎄🦇🥂💌🦃

    const [currentHoliday, setCurrent] = useState<string>(holidays[0]);

    function cycleAlphabetical(): void {
        const current = alphabetical.indexOf(currentHoliday);
        setCurrent(alphabetical[(current + 1) % alphabetical.length]);
    }

    function cycleInOrder(): void {
        const current = yearlyOrder.indexOf(currentHoliday);
        setCurrent(yearlyOrder[(current + 1) % yearlyOrder.length]);
    }

    return (
        <div>
            Cycle Holiday
            <div>
                <span>Holiday: {currentHoliday} </span>
            </div>
            <div>
                <Button onClick={cycleAlphabetical}>Alphabet Cycle</Button>

                <Button onClick={cycleInOrder}>Year Cycle</Button>
            </div>
        </div>
    );
}
