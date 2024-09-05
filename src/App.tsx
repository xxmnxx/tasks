import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Morgan Nutto
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1> AI Pros and Cons</h1>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <div
                                            style={{
                                                height: "40px",
                                                width: "100%",
                                                color: "white",
                                                margin: "12px",
                                            }}
                                        >
                                            Cons
                                        </div>

                                        <ul>
                                            <li> ethical concerns</li>
                                            <li> job displacement </li>
                                            <li> lacks creativity</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    height: "90%",
                                    width: "90%",
                                    margin: "15px",
                                }}
                            >
                                <img
                                    src="src\Images\AI-bot.avif"
                                    alt="side profile picture of an AI bot"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div>
                                <Button
                                    style={{
                                        backgroundColor: "red",
                                        color: "white",
                                    }}
                                    onClick={() => {
                                        console.log("Hello World!");
                                    }}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
