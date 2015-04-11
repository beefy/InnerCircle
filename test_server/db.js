var mongoose = require('mongoose')
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var db_url = "mongodb://localhost:27017/innercircle",
    db = mongoose.connect(db_url);

var projectSchema = new Schema({
    id: ObjectId,
    lat: { type: String, required: true },
    long: { type: String, required: true },
    name: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

var project = db.model('name', projectSchema, 'name');
