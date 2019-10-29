const express = require("express");
const router = express.Router();

router.get('/posts', (req, res) => {
   res.send('Router post');
});

module.exports = router;