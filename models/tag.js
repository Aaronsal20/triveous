const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
    title: { type: String, required: true },
    timeCreated: { type : Date, default: Date.now },
    timeUpdated: { type : Date, default: Date.now },
});

module.exports = mongoose.model('Tag', tagSchema);