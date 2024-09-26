const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ msg: "users retrieved", users });
  } catch (err) {
    console.log(err);
  }
});

router.get("/findUserById/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send({ msg: "User retrieved", user });
  } catch (err) {
    console.log(err);
  }
});

router.post("/addUser", async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      familyName: req.body.familyName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    };
    await User.create(newUser);
    res.send({ msg: "New user added", newUser });
  } catch (err) {
    console.error(err);
  }
});

router.put("/updateUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    res.send({ msg: "User is updated", updatedUser });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.findByIdAndDelete(id);
    res.send({ msg: "user deleted", deleted });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
