var mongoose = require('mongoose')
var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var db_url = "mongodb://localhost:27017/researchMe",
    db = mongoose.connect(db_url);

var projectSchema = new Schema({
    id: ObjectId,
    title: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

var project = db.model('project', projectSchema, 'project');
