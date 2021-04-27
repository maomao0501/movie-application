const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Watchlist = require('../../models/watchlist');
const checkObjectId = require('../../middleware/checkObjectId');
const User = require('../../models/User');
var ObjectId = require('mongodb').ObjectId;

// @route    POST api/watchlist
// @desc     Create a watchlist data
// @access   Private
router.post(
    '/',
    [auth, [check('text', 'Text is required').not().isEmpty()]],
    async (req, res) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newWatchMovie = new Watchlist({
                user: req.user.id,
                movie: req.body.movie
            });

            const post = await newWatchMovie.save();

            res.json(post);

            res.json({ msg: 'Movie added' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

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

// @route    GET api/watchlist
// @desc     Get all watchlist
// @access   Private
router.get('/:watchlistId',
    // [auth, [check('text', 'Text is required').not().isEmpty()]],
    checkObjectId('watchlistId'),
    async (req, res) => {
        try {
            const watchlist = await Watchlist.findOne({_id: req.params.watchlistId});
            res.json(watchlist);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

// @route    DELETE api/watchlist
// @desc     Delete watchlist data
// @access   Private
router.delete('/:watchlistId',
    [auth, checkObjectId('watchlistId')],
    // checkObjectId('watchlistId'),
    async (req, res) => {
    try {
        const movie = await Watchlist.findOne({_id: req.params.watchlistId});

        if (!movie) {
            return res.status(404).json({ msg: 'Movie record not found' });
        }

        await movie.remove();

        res.json({ msg: 'Movie record removed' });
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
    }
});

// router.get('/', function(req, res, next) {
//     request({
//         uri: 'https://api.themoviedb.org/3/movie/top_rated?',
//         qs: {
//             api_key: 'a17b23da55290facfec6182186abc701',
//             // query: 'World of Warcraft: Legion'
//         }
//     }).pipe(res);
// });

module.exports = router;
