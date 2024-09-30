import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    //model
    const [option, setOption] = useState<string>(options[0]);
    const isRight = option === expectedAnswer;
    //control
    function ChangeOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    
    //view
    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="multipleChoice">
                <Form.Label> Choose the correct answer </Form.Label>
                <Form.Select value={option} onChange={ChangeOption}>
                    {options.map((option: string) => (
                        <option key="option" value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div> {option && (isRight ? "✔️" : "❌")}</div>
        </div>
    );
}
