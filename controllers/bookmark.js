const mongoose = require('mongoose');
const bookmark = require('../models/bookmark');

exports.createBookmark = async (req, res, next) => {
  const uId = mongoose.Types.ObjectId();
  console.log("exports.createUser -> uId", uId);
  const today = new Date();
  const book = new bookmark({
    _id: uId,
    title: req.body.title,
    timeCreated: today,
    link: req.body.link,
    publisher: req.body.publisher,
    tag: req.body.tag
  });
  const result = await book.save();
  console.log("exports.createUser -> result", result);
  res.status(201).json({
    message: 'Bookmark created',
    result: result
  });
}

exports.getBookmarks = async (req, res, next) => {
  bookmark.find().then(result => {
      res.status(201).json(result)
  }).catch(err => {
      res.status(400).json({
          errorMessage: err
      })
  })
}

exports.delete = async (req, res, next) => {
  bookmark.deleteOne({_id: req.params.id }).then(res => {
    res.status(201).json({
      message: 'Bookmark deleted',
      result: result
    });
  }).catch(err => {
    res.status(400).json({
      message: 'Error',
      result: err
    })
  })
}


