import { addUser, confirmLogin } from "./user.model.js";
import jwt from "jsonwebtoken"
export const registerUser = (req, res) => {
  const userData = req.body;
  console.log(req.body);
  if (userData) {
    let user = addUser(userData);
     return res.status(201).json({ status: "success", user });
  } else {
    return res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  const status = confirmLogin(req.body);

  if (status) {
    // Login successful hai toh JWT generate karein
    const token = jwt.sign({ userId: req.body.id  , email:req.body.email}, 'mZARI5pZ6UYgxvwAwGmRdkssIe9MVsM2', { expiresIn: '1h' });

    res.status(200).json({ status: "success", msg: "login Successful", token });
  } else {
    res.status(401).json({ status: "failure", msg: "invalid Details" });
  }
};