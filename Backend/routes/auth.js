const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var fetchuser=require('../middleware/fetchuser')
const JWT_SECRET = 'divyanshurawat2001';
var jwt = require('jsonwebtoken');


// Route 1 - create a user using Post 
router.post('/createuser', [

  body('name', 'Enter a Valid uername').isLength({ min: 3 }),
  body('password', 'Password cannot be blank').exists(),
  body('email', 'Enter a Valid Email').isEmail(),

], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // CHECK USER WITH SAME EMAIL EXISTS

  try {

    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: "Sorry Email with that username already exists" })
    }


    const salt = await bcrypt.genSalt(10);
    const secpassword = await bcrypt.hash(req.body.password, salt);


    user = await User.create({
      name: req.body.name,
      password: secpassword,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET)


    res.json({ authtoken });
  }


  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }


})

// Route 2 - Authenticate a User /api/auth/login

router.post('/login', [
  body('email', 'Enter a Valid Email').isEmail(),

], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  const { email, password } = req.body;
  try {
    let user = await User.findOne(({ email }));
    if (!user) {
      res.status(400).json({ error: "Please try to login with correct credentials" })
    }


    const passwordcompare = await bcrypt.compare(password, user.password);
    if (!passwordcompare) {
      res.status(400).json({ error: "Please try to login with correct credentials" })
    }

    const data = {
      user: {
        user: user.id
      }
    }


    const authtoken = jwt.sign(data, JWT_SECRET)
    res.json({ authtoken })


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

})

// Route 3 - Get User LOGGED IN  user Details Post api/auth/getuser
router.post('/getuser', fetchuser, async (req, res) => {

try{
  userId=req.user.id;
  const user= await User.findById(userId).select("-password")
     res.send(user);
}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error")
}
})
module.exports = router