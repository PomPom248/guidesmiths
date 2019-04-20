const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    model: String,
    brand: String,
    firstRelease: String,
    dimensions: {
        height: String,
        width: String,
        mass: String
    },
    memory: String,
    storage: String,
    battery: String
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    });

const Phones = mongoose.model('Phones', phoneSchema);
module.exports = Phones;
