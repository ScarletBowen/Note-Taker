const path = require('path'); // path is a core module

// sends the user to the notes
module.exports = function(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'));
};

// sends the user to the index page
module.exports = function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
}



