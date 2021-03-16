import "./App.css";

import { Button, Form, ProgressBar, Spinner } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Label>Street address</Form.Label>
        <Form.Control type="text" placeholder="Adress" />
        <Form.Text className="text-muted"></Form.Text>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Leave a message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>

        <ProgressBar now={90} mt-20 />
        <Spinner animation="border" variant="warning" />
      </Form>
    </div>
  );
}

export default App;
