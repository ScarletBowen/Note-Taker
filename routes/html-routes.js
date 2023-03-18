const path = require('path'); // path is a core module
const router = require('express').Router();

// sends the user to the notes
router.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// sends the user to the index page

router.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;

