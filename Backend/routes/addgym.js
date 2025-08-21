var express = require('express');
var router = express.Router();
const gym = require('../model/gymdata')
const upload = require('../Middleware/upload')

// router.post('/', (req, res) => {
//  console.log("📥 Data received from frontend:", req.body);  // Backend console check karo

//     res.json({ message: "Gym added successfully!" });
// });

router.post(
    '/',
    upload.fields([
        { name: 'shoplicense', maxCount: 1 },
        { name: 'healthcert', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const {
                gymName,
                gymowner,
                mail,
                gender,
                country,
                Address,
                aadhar,
                contact,
                cost,
                desc
            } = req.body;

            const features = req.body['features[]']
                ? Array.isArray(req.body['features[]'])
                    ? req.body['features[]']
                    : [req.body['features[]']]
                : [];

            const Gym = new gym({
                gymName,
                gymowner,
                mail,
                gender,
                country,
                Address,
                aadhar,
                contact,
                cost,
                desc,
                features,
                shoplicense: req.files.shoplicense?.[0].filename || null,
                healthcert: req.files.healthcert?.[0].filename || null,
                logo: req.files.logo?.[0].filename || null,
            });

            await Gym.save();
            res.status(201).json({ message: "Gym added", Gym });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
);

module.exports = router;
