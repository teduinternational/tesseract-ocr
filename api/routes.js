'use strict';
module.exports = function(app) {
  let imagesCtrl = require('./controllers/ImagesController');

  app.route('/images/image-to-text')
    .post(imagesCtrl.imageToText);
};