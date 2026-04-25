const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     console.log('📩 Signup request body:', req.body); // DEBUG

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       console.log('⚠️ User already exists:', email);
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     console.log('✅ User saved to DB:', newUser); // DEBUG

//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     const firstName = name.split(' ')[0];
//     res.status(201).json({
//       message: 'User registered',
//       token,
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         firstName,
//         email: newUser.email,
//       },
//     });
//   } catch (err) {
//     console.error('❌ Signup error:', err);
//     res.status(500).json({ message: 'Signup failed', error: err.message });
//   }
// };

const signup = async (req, res) => {
  let { name, email, password } = req.body;

  try {
    email = email.toLowerCase().trim(); // ✅ normalize before checking

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const firstName = name.split(' ')[0];
    res.status(201).json({
      message: 'User registered',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        firstName,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ return user info along with token
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,   // make sure `name` exists in your User schema
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};


const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get user', error: err.message });
  }
};

module.exports = {
  signup,
  login,
  getCurrentUser,
};
