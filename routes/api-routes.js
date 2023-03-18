const fs = require('fs'); // File System
// var uuid = require('uuid'); // UUID
const router = require('express').Router();

// routing
     router.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', 'utf8', function(err, data) {
             if (err) throw err;
             res.json(JSON.parse(data));
        });
    });

     router.post('/api/notes', function(req, res) {
            fs.readFile('./db/db.json', 'utf8', function(err, data) {
                 if (err) throw err;
                 var notes = JSON.parse(data);
                  var newNote = req.body;
               //    newNote.id = uuid.v4();
                //  push the new note to the json file
                notes.push(newNote);
                 fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
                     if (err) throw err;
                    res.json(notes);
                    });
               });
     }); 
      // router.delete('/api/notes/:id', function(req, res) {
      //       fs.readFile('./db/db.json', 'utf8', function(err, data) {
      //              if (err) throw err;
      //                var notes = JSON.parse(data);
      //                var noteId = req.params.id;
      //                for (var i = 0; i < notes.length; i++) {
      //                   if (noteId === notes[i].id) {
      //                      notes.splice(i, 1);
      //                   }
      //                }
      //                fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
      //                   if (err) throw err;
      //                   res.json(notes);
      //                });
      //          });
      //       });




// module.exports = {getAll, postNote, deleteNote};
module.exports = router; // export the router
