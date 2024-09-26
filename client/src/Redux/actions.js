import { GET_USERS } from "./actionTypes";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  await axios
    .get("/user/getAllUsers")
    .then((res) => dispatch({ type: GET_USERS, payload: res.data.users }))
    .catch((err) => console.error(err));
};

export const deleteUser = (idUser) => async (dispatch) => {
  await axios
    .delete(`/user/deleteUser/${idUser}`)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.error(err));
};

export const addUser = (newUser) => async (dispatch) => {
  await axios
    .post("/user/addUser", newUser)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.error(err));
};

export const updateUser = (idUser, updatedUser) => async (dispatch) => {
  await axios
    .put(`/user/updateUser/${idUser}`, updatedUser)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.error(err));
};
