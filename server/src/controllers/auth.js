// Schema
import User from '../models/user';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup = async (request, response) => {
  try {
    console.log(request.body);
    const { name, email, password, nationality, job } = request.body;

    const user = new User({
      name,
      email,
      password,
      nationality,
      job,
      createdAt: new Date(),
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '10d' });
    response.status(201).send({
      user,
      jwtToken,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Nooooo.mail');
    }

    const isEnteredPasswordCorrect = await user.isPasswordCorrect(password, user.password);
    if (!isEnteredPasswordCorrect) {
      throw new Error('password not match...');
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '10d' });
    response.json({
      user,
      jwtToken,
    });
  } catch (error) {
    console.log(error.message, error.name);
    response.status(400).send({
      message: 'OOPS! Please enter your email and password again.',
    });
  }
};

export const loadMe = async (request, response) => {
  try {
    const { user } = request;
    response.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
