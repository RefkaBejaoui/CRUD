import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Redux/actions";
import { Link } from "react-router-dom";

function UserCard({ _id, name, familyName, email, phoneNumber }) {
  const dispatch = useDispatch();
  const deleteOne = () => {
    const confirmed = window.confirm("Are you sure to delete this user ?");
    if (confirmed) {
      dispatch(deleteUser(_id));
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {name} {familyName}
        </Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{phoneNumber}</Card.Text>
        <Button onClick={deleteOne} variant="danger">
          Delete
        </Button>
        <Link to={`/updateUser/${_id}`}>
        <Button variant="success">
          Edit
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
