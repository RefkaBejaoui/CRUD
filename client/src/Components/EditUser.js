import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../Redux/actions";

function EditUser() {

    const {id} = useParams()
    const users = useSelector(state=> state.users)
    const userToUpdate = users.find((el)=>el._id == id)

    const dispatch=useDispatch()
    const navigate = useNavigate()

  const [name, setName] = useState();
  const [familyName, setFamilyName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(()=>{
    console.log(users)
    console.log(userToUpdate)
    if(userToUpdate) {
    setName(userToUpdate.name)
    setFamilyName(userToUpdate.familyName)
    setEmail(userToUpdate.email)
    setPhoneNumber(userToUpdate.phoneNumber)
    }
  },[userToUpdate])

  const update = () => {
    const updatedUser = {
        name: name,
        familyName: familyName,
        email: email,
        phoneNumber: phoneNumber
    }
    dispatch(updateUser(id.id, updatedUser))
    navigate("/")
  }
 

  return (
    <>
      <h1>Update user</h1>
      {userToUpdate && (
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Family name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Family name"
              onChange={(e) => setFamilyName(e.target.value)}
              value={familyName}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </Form.Group>
        </Row>
        <Button onClick={update} >Update user</Button>
        <Button variant="danger">Cancel</Button>
      </Form>
      )}
      
    </>
  );
}

export default EditUser;
