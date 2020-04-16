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
  var perPage = 2;
  var page = req.params.page || 1;
  bookmark.find().sort({ title: 1 }).skip(perPage * page - perPage)
  .limit(perPage).then(result => {
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

// router.get("/schemes/:page", auth.authUser, async function(req, res, next) {
//   //https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html
//   var userData = await userModel.findOne({ _id: mongoose.Types.ObjectId(req.session.userId) });
//   var perPage = 2;
//   var page = req.params.page || 1;
//   var pagination = "";
//   const base_url = "/api/v1/user/schemes/";
//   var filter = { dis_type: "Disability 4" };
//   // filter.eligibility = { "age": { "minage": 1, "maxage": null } };
//   filter = {};
//   indivScheme
//     .find(filter)
//     .sort({ schemename: 1 })
//     .skip(perPage * page - perPage)
//     .limit(perPage)
//     .exec(function(err, schemes) {
//       indivScheme.countDocuments(filter).exec(async function(err, count) {
//         if (err) return next(err);
//         const template = await fs.readFileSync(
//           "views/scheme_application/list_all_card.ejs",
//           "utf-8",
//         );
//         const html = ejs.render(template, { schemes: schemes, moment: moment, userData: userData });

//         const template2 = await fs.readFileSync(
//           "views/scheme_application/list_all_pagination.ejs",
//           "utf-8",
//         );
//         pagination = ejs.render(template2, {
//           current: page,
//           pages: Math.ceil(count / perPage),
//           base_url: base_url,
//         });
//         res.json({
//           html: html,
//           current: page,
//           pagination: pagination,
//           pages: Math.ceil(count / perPage),
//         });
//       });
//     });
// });


