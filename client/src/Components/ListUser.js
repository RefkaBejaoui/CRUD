import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/actions";
import UserCard from "./UserCard";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function ListUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  },[]);

  const add = () => {
    navigate("/addUser")
  }
 
  return (
    <>
    <h1>User's list</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users &&
        users.map((el) => (
          <UserCard key={el._id} {...el} />
        ))
        // users.map((el)=> <UserCard key={el._id} el={el}/>)
      }
    </div>
    <Button onClick={add}>Add user</Button>
    </>
  );
}

export default ListUser;
