import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [attempts, changeAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function start(): void {
        setProgress(true);
        changeAttempts((attempts => attempts - 1));
    }

    function stop(): void {
        setProgress(false);
    }

    function mull(): void {
        changeAttempts((attempts => attempts + 1));
    }

    return (
        <div>
            <div>
                <p> Quiz is {progress ? "in progress" : "not in progress"}</p>
                <p> Attempts left: {attempts}</p>
            </div>

            <Button onClick={start} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mull} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
