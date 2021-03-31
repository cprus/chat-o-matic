import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container } from 'shards-react';

import "./index.css";

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>Here is some paragraph text</p>
    <h1>Chat App</h1>
    <Chat />
    <p>Here is another paragraph of text</p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
