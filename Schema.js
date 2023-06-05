const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;