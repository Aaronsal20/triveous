const mongoose = require('mongoose');
const tagSchema = require('../models/tag');
const bookmark = require('../models/bookmark');


exports.creatTag = async (req, res, next) => {
    const id = mongoose.Types.ObjectId();
    const today = new Date();
    const tag = new tagSchema({
        _id: id,
        title: req.body.title,
        timeCreated: today,
    });
    const result = await tag.save();
    res.status(201).json({
        message: 'Tag created',
        result: result
    });
}

exports.getTags = async (req, res, next) => {
    var perPage = 2;
    var page = req.params.page || 1;
    tagSchema.find().sort({ title: 1 }).skip(perPage * page - perPage)
    .limit(perPage).then(result => {
        res.status(201).json(result)
    }).catch(err => {
        res.status(400).json({
            errorMessage: err
        })
    })
}

exports.delete = async (req, res, next) => {
    tagSchema.deleteOne({_id: req.params.id }).then(res => {
      res.status(201).json({
        message: 'Tag deleted',
        result: result
      });
    }).catch(err => {
      res.status(400).json({
        message: 'Error',
        result: err
      })
    })
}

exports.addTag = async (req, res, next) => {
    const book = await bookmark.findById({_id: req.body.bookmark});
    book.tag.push(req.body.tag);
    const result = await book.save();
    res.status(201).json({
        message: 'Tag Added',
        result: result
    });
}

exports.removeTag = async (req, res, next) => {
    const book = await bookmark.findById({_id: req.body.bookmark});
    let index =  book.tag.indexOf(req.body.tag);
    book.tag.splice(index, 1);
    const result = await book.save();
    res.status(201).json({
        message: 'Tag Removed',
        result: result
    });
}