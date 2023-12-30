import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  const clickHandler = () => {
    if (value == "") {
      alert("jangan kosongin bang!!");
      return;
    }
    setTodo([...todo, value]);
    setValue("");
  };

  const deleteHandler = (e) => {
    const index = e.target.value;

    const updatedTodo = [...todo];

    updatedTodo.splice(index, 1);

    setTodo(updatedTodo);
  };

  return (
    <>
      <div className="text-center bg-white">
        <h1>Todo List Using React.JS</h1>
      </div>

      <div className="container mt-5 rounded py-2 px-2">
        <Row>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Input your list"
              className="m-3"
              onChange={inputHandler}
              value={value}
            />
          </Col>
          <Col sm={3}>
            <Button
              as="input"
              type="submit"
              value="Add"
              className="m-3"
              onClick={clickHandler}
            />
          </Col>
        </Row>

        {todo.map((item, index) => (
          <div className="card m-3" key={index}>
            <div className="card-body">
              {item}{" "}
              <button
                className="btn btn-danger sm float-end"
                onClick={deleteHandler}
                value={index}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
