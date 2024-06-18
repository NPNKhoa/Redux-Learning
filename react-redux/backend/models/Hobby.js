const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Hobby', hobbySchema);