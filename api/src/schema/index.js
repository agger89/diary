/* sequelize\models\index.js */
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config')[env];
const fs = require('fs');

// mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`,{"auth":
//  {"authSource": config.mongo.database},
// "user": `${config.mongo.user}`,
// "pass": `${config.mongo.password}`}).then((data)=>{
// });

const db = {};
const diary = new Sequelize(
  config.db_info.database, config.db_info.user, config.db_info.password, config.db_info
);

diary.sync();

db.sequelize= diary;
db.DataTypes = Sequelize;
db.Op = Sequelize.Op;
db.table = {};
var filelist = fs.readdirSync(__dirname);
for (var item of filelist) {
  if (item != 'mongo.js' && item != 'index.js') {
    db.table = Object.assign(db.table, require('./' + item)({diary}, db.DataTypes)) ;
  }
}
// db.mongo_table = require('./mongo');
module.exports = db;
