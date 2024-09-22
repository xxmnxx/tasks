import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            Current Type:{" "}
            <span>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </span>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
