const express = require("express");
const data = require("./data");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")


const app = express();

app.use(express.json());
app.use(cors());

const connectionURL = "mongodb+srv://ayushmanware19:Ayush2001@cluster0.badubsb.mongodb.net/Major-Project-Tourism-India?retryWrites=true&w=majority&appName=Cluster0"


// Connection To Mongodb
mongoose
  .connect(connectionURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



// User model
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});



app.use(bodyParser.json());



app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      // Save user to database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'Ayush2001', { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });  






app.get("/Madhya-Pradesh", (req, res) => {
  res.send(data.filter((f) => f.state === "Madhya Pradesh"));
});

app.get("/Himachal-Pradesh", (req, res) => {
  res.send(data.filter((f) => f.state === "Himachal Pradesh"));
});

app.get("/Kashmir", (req, res) => {
  res.send(data.filter((f) => f.state === "Kashmir"));
});

app.get("/Gujarat", (req, res) => {
  res.send(data.filter((f) => f.state === "Gujarat"));
});

app.get("/Nagaland", (req, res) => {
  res.send(data.filter((f) => f.state === "Nagaland"));
});

app.get("/Maharashtra", (req, res) => {
  res.send(data.filter((f) => f.state === "Maharashtra"));
});

app.get("/West-Bengal", (req, res) => {
  res.send(data.filter((f) => f.state === "West Bengal"));
});

app.get("/Haryana", (req, res) => {
  res.send(data.filter((f) => f.state === "Haryana"));
});

app.get("/Assam", (req, res) => {
  res.send(data.filter((f) => f.state === "Assam"));
});

app.get("/Puduchery", (req, res) => {
  res.send(data.filter((f) => f.state === "Puduchery"));
});

app.get("/Rajasthan", (req, res) => {
  res.send(data.filter((f) => f.state === "Puduchery"));
});

app.get("/Puduchery", (req, res) => {
  res.send(data.filter((f) => f.state === "Rajasthan"));
});

app.get("/goa", (req, res) => {
  res.send(data.filter((f) => f.state === "goa"));
});

app.get("/uttrakhand", (req, res) => {
  res.send(data.filter((f) => f.state === "uttrakhand"));
});

app.get("/sikkim", (req, res) => {
  res.send(data.filter((f) => f.state === "sikkim"));
});

app.get("/meghalaya", (req, res) => {
  res.send(data.filter((f) => f.state === "meghalaya"));
});

app.get("/kerala", (req, res) => {
  res.send(data.filter((f) => f.state === "kerala"));
});

app.listen(2100, () => {
  console.log("Server Started");
});
