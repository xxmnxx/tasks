import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    //model
    const [answer, setAnswer] = useState<string>("");

    //Control
    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setAnswer(event.target.value)
    }

    const isRight = (answer === expectedAnswer);

    //view
    return (
        <div>
            <h3> Check Answer </h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={changeAnswer} />
            </Form.Group>
            <div>
                {answer ? (isRight ? "✔️":"❌"):"❌"}
            </div>
        </div>
    );
}
