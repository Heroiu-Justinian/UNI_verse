const express = require('express');
const uniControler = require('../controlers/UniversityControler');
const contestControler = require('../controlers/ContestControler')
const router = express.Router();

router.route('/university')
    .get(uniControler.getUni)
    .post(uniControler.postUni)

router.route('/contest')
    .get(contestControler.getContest)
    .post(contestControler.postContest)

module.exports = router;
