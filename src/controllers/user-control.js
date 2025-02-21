const express = require('express');
const User = require('../models/userSchema');

module.exports.addUser = async (req, res) => {
  try {
    const { body } = req;
    const { email } = req.body;
    const check = await User.find({ email: email });
    if (!check) {
      return res.status(500).json({ message: 'user is already exist' });
    }
    const user = await User.create(body);
    res.status(201).json({ message: 'Create user Data', user: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete({ _id: id });
    if (!user) {
      return res.status(404).json({ message: 'user not exist' });
    }
    res.status(200).json({ message: ' you selected user is deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).json({ message: 'users not exist' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
    res
      .status(200)
      .json({ message: 'you selected user is updated', user: user });
  } catch (error) {
    res.status(404).json({ message: error.messgae });
  }
};
