import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "grey",
];

export function ChangeColor(): React.JSX.Element {
    //model
    const [color, setColor] = useState<string>("red");

    //control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    //view
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((option) => (
                <Form.Check
                    inline
                    key={option}
                    type="radio"
                    id={`color-${option}`}
                    label={
                        <span
                            style={{
                                backgroundColor: option,
                                color: "black",
                                padding: "2px 5px",
                            }}
                        >
                            {option}
                        </span>
                    }
                    value={option}
                    checked={color === option}
                    onChange={updateColor}
                />
            ))}

            <div>
                You chose:<div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: "black",
                        display: "inline-block",
                    }}>{color}
                </div>
            </div>
        </div>
    );
}
