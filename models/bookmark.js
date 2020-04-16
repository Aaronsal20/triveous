const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookmarkSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: { type: String, required: true, unique: true },
  timeCreated: { type : Date, default: Date.now },
  timeUpdated: { type : Date, default: Date.now },
  publisher: { type: String, required: true },
  tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

bookmarkSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Bookmark', bookmarkSchema);
