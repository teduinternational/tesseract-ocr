'use strict';
module.exports = function (app) {
  let imagesCtrl = require('./controllers/ImagesController');


  app.route('/')
    .get((req,res) => {
      res.json('App is running...');
    });
  app.route('/images/image-to-text')
    .post(imagesCtrl.imageToText);
};