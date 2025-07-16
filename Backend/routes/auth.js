const express = require('express');
const router = express.Router();
var users = require('../model/users')
var index = require('./index');
var schedule = require('./schedule');
const passport = require('passport');
var localstrategy = require("passport-local");
passport.use(new localstrategy({ usernameField: 'email' }, users.authenticate()));



router.use('/', index);
router.use('/schedule', schedule);


router.post('/register', async (req, res) => {
  try {
    const userdata = new users({
      fullname: req.body.fullname,
      username: req.body.email,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      fitnessGoal: req.body.fitnessGoal,
    });
    users.register(userdata, req.body.password, (err, registeredUser) => {
      if (err) {
        if (err.name === 'UserExistsError') {
          return res.status(409).json({ message: 'Username already exists' });
        }
        console.error('Registration error:', err);
        return res.status(500).json({ message: 'Something went wrong during registration' });
      }

      // Log the user in after registration
      passport.authenticate("local")(req, res, () => {
        res.status(201).json({ message: "User registered and logged in successfully" });
      });
    });

  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// // Login route
router.post('/login', (req, res, next) => {
  console.log("Login request body:", req.body);

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!user) {
      console.log("Login failed:", info);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.logIn(user, async (err) => {
      if (err) {
        console.error("Login session error:", err);
        return res.status(500).json({ message: "Login failed" });
      }

      console.log("Login successful for user:", user.email);
      try {
        // ✅ Find user by email, not by ID
        const fullUser = await users.findOne({ email: user.email }).select('-hash -salt');

        if (!fullUser) {
          return res.status(404).json({ message: "User not found by email" });
        }

        console.log("Full user info:", fullUser);

        return res.status(200).json({ message: "Login successful", user: fullUser });
      } catch (error) {
        console.error("Error finding user by email:", error);
        return res.status(500).json({ message: "Error fetching user by email" });
      }
    });
  })(req, res, next);
});

router.get('/dashboard', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const user = await users.findOne({ email: req.user.email }).select('-hash -salt');
      res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ message: "Error fetching user from DB" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});


router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.status(200).json({ message: 'Logged out successfully' });
  });
});



// ✅ PROTECTED ROUTE MIDDLEWARE
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   return res.status(401).json({ message: 'Unauthorized' });
// }
// ✅ Correct export
module.exports = router;
