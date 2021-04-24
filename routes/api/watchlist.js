const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Watchlist = require('../../models/watchlist');
const checkObjectId = require('../../middleware/checkObjectId');

// // @route    POST api/comments
// // @desc     Create a comment
// // @access   Private
// router.post(
//     '/',
//     [auth, [check('text', 'Text is required').not().isEmpty()]],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//
//         try {
//             const user = await User.findById(req.user.id).select('-password');
//
//             const newComment = new Comment({
//                 user: req.user.id,
//                 movie: req.body.movieId,
//                 text: req.body.text,
//                 avatar: user.avatar
//             });
//
//             const post = await newComment.save();
//
//             res.json(post);
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         }
//     }
// );

// @route    GET api/watchlist
// @desc     Get all watchlist
// @access   Private
router.get('/',
    // [auth, [check('text', 'Text is required').not().isEmpty()]],
    async (req, res) => {
        try {
            const watchlist = await Watchlist.find();
            res.json(watchlist);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;