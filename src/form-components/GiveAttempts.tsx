import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    //model
    const[attempts, setAttempts] = useState<number>(3);
    const[request, setRequest] = useState<number>(0);

    //control
    function changeRequest(event: React.ChangeEvent<HTMLInputElement>) {
        const amount = parseInt(event.target.value);
        setRequest(isNaN(amount)? 0 : amount)
    }

    function loseAttempt(){
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }


    function addAttempt(){
        setAttempts(attempts + request);
    }

    return (
        <div>
            <h3> Request Attempts </h3>
            <div> attempts left: {attempts}</div>
            <Form.Group controlId="formRequest">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={changeRequest}
                />
            </Form.Group>
            <Button onClick = {loseAttempt} disabled = {attempts === 0}>use</Button>
            <Button onClick = {addAttempt}>gain</Button>
        </div>
    );
}
