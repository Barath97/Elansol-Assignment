const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); 
const RegisterModel = require("./models/RegiterDetails");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/LoginDetails");


app.post("/register", async (req, res) => {
  try {
    const {name,email, password,date } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = {
      name: name,
      email: email,
      password: hashedPassword,
      date: date
    };

    const user = await RegisterModel.create(newUser);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModel.findOne({ email: email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json("Success");
      } else {
        res.json("The Password is incorrect");
      }
    } else {
      res.json("Invalid Email");
    }
  } catch (err) {
    res.json(err);
  }
});

app.get('/getusers',(req,res)=>{
    RegisterModel.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
  console.log("server is running");
});
