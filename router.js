const express = require('express');
const app = express();

app.use(express.json());

const User = require('./User/Schema');

app.post('/api/signup', async(req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const user = new User({
      username,
      email,
      password,
    });

    try
    {
    await user.save();
    res.send(user);
    }
    catch(error)
    {
    res.status(400).send(error);
    }
  });

  app.get("/users",async(req,res)=>{
    const users = await User.find({});
    try
    {
        res.send(users);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
  });

  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
    
      const user = await User.findOne({ username });
  
      if (!user) {
        // User not found
        return res.status(401).json({ error: 'User not found' });
      }
      // Compare the stored password with the provided password
      if (user.password !== password) {
        // Password mismatch
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      // Handle database errors
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = app;


