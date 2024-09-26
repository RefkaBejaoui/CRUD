import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/actions";
import { useNavigate } from "react-router";

function AddUser() {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNew = (e) => {
    e.preventDefault()
    const newUser = {
        name: name,
        familyName: familyName,
        email: email,
        phoneNumber: phoneNumber
    }
    dispatch(addUser(newUser))
    navigate("/")
  }

  const goHome = () => {
    navigate("/")
  }

  return (
    <>
    <h1>Add new user</h1>
    <Button onClick={goHome}>Home</Button>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              onChange={e=>setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Family name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Family name"
              onChange={e=>setFamilyName(e.target.value)}
            />
          </Form.Group>
        <Form.Group as={Col} md="3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              onChange={e=>setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone number"
              onChange={e=>setPhoneNumber(e.target.value)}
            />
          </Form.Group>
         </Row> 
        <Button onClick={addNew}>Add user</Button>
      </Form>
    </>
  );
}

export default AddUser;
