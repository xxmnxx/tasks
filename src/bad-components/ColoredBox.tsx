import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps{
    setColorIndex: (newIndex: number) => void //is a function thats takes an index and returns nothing
    colorIndex: number // color index is a number
}
// takes the current color index and set index function
function ChangeColor({ colorIndex, setColorIndex }: ChangeColorProps): React.JSX.Element {
    return (
        // on click, colorIndex increments by 1 and is passed to setIndex function
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }} 
        >
            Next Color
        </Button>
    );
}

function ColorPreview({colorIndex}: {colorIndex: number}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                //background color is color with current index
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    //set color index initial state to be DEFAULT_COLOR_INDEX (0)
    let [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                
                <ChangeColor colorIndex={colorIndex} setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );// current color index and setColorIndex function gets passed to changeColor component
    // current color index gets passed to color preview 
}
