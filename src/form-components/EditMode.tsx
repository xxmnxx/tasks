import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    //models
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //controls
    function switchMode() {
        setEditMode(!editMode);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function changeStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formEdit">
                <Form.Check
                    inline
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={switchMode}
                />
            </Form.Group>

            {editMode ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={changeName}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            inline
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={changeStudent}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {username} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
