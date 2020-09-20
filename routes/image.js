var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/:fileName', function(req, res, next) {
    var fileName = req.params.fileName;
    res.sendFile(fileName, { root: path.join(__dirname, '../uploads') });
    // res.send(`${fileName}`);
});

module.exports = router;