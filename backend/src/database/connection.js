const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.romfgyr.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false});
mongoose.Promise = global.Promise;

module.exports = mongoose;