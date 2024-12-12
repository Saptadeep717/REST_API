const User = require('../models/user.model.js');

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        if (!users.length) {
          return res.status(404).json({
            success: false,
            message: "No users found",
          });
        }

        
        res.status(200).json({
          success: true,
          data: users,
        });

    }catch(err){
        res.status(500).send("Error retrieving users");
    }
}

const createUser = async (req, res) => {
    try{
        const {id,name,email} = req.body;
        const existingUser = await User.findOne({ id });
        if (existingUser) {
          return res.status(400).json({
            success: false,
            message: "User with this ID already exists",
          });
        }
        const newUser = new User({id,name, email});
        await newUser.save();
        res.status(201).json({
          success: true,
          data: newUser,
        });


    }catch(err){
        res.status(500).send('Error creating user');
    }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({id: userId});
    if (!user) return res.status(404).send('User not found');
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).send('Error retrieving user');
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findOneAndUpdate(
      { id: userId }, 
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) return res.status(404).send("User not found");
    res.status(200).json({
        success: true,
        message:`User updated successfully`,
        data:updatedUser
    })
  } catch (err) {
    res.status(500).send("Error updating user");
  }
};

const deleteUser = async (req, res) => {
  try {
     const userId = req.params.id;
    const user = await User.findOneAndDelete({id: userId});
    if (!user) return res.status(404).send("User not found");
    res.status(200).json({ 
        success: true,
        message: `User deleted , id : ${userId}` });
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
};

module.exports = {getUsers,createUser,getUserById,deleteUser,updateUser};