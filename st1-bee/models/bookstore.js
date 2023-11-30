let mongoose = require('mongoose');

// Employee Schema
const Bookstore = mongoose.model('Bookstore', {
    title : {
        type: String,
        required:true
    }, 
    author : {
        type:String,
        required:true
    },
    genre : {
        type:String,
        required:true
    },
    publicationYear : {
        type:String,
        required:true
    },
    ISBN : {
        type:String,
        required:true
    }
});

module.exports = {Bookstore}