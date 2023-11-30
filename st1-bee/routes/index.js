const express = require('express');
const router = express.Router();
const { Bookstore } = require('../models/bookstore');


// Get All Employees
router.get('/api/books', async (req, res) => {
    try {
        const data = await Bookstore.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});



//Get Single Employee

router.get('/api/books/:id', (req, res) => {
    Bookstore.findById(req.params.id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send('Book not found');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});



//Save Employee
router.post('/api/books', (req, res) => {
    const emp = new Bookstore({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear,
        ISBN: req.body.ISBN
    });

    emp.save()
        .then(data => {
            res.status(200).json({ code: 200, message: 'Book Added Successfully', addBookstore: data });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});


//Update Employee
router.put('/api/books/:id', (req, res) => {
    const emp = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear,
        ISBN: req.body.ISBN
    };

    Bookstore.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true })
        .then(data => {
            if (data) {
                res.status(200).json({ code: 200, message: 'Book Updated Successfully', updateBookstore: data });
            } else {
                res.status(404).send('Book not found');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});





//Delete Employee
router.delete('/api/books/:id', (req, res) => {
    Bookstore.findOneAndDelete({ _id: req.params.id })
        .then(data => {
            if (data) {
                res.status(200).json({ code: 200, message: 'Book deleted', deleteBookstore: data });
            } else {
                res.status(404).send('Book not found');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});



module.exports = router;