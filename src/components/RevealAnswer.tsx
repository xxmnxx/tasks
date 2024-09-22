import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const answer = 42;
    const [visible, setVisible] = useState<boolean>(false);

    function setVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={setVisibility}> Reveal Answer </Button>
            {visible && <div> {answer} </div>}
        </div>
    );
}
