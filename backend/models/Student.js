const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    }
},{
    collection: "students"
})

module.exports = mongoose.model('Student', studentSchema);