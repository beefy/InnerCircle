var mongoose = require("mongoose");
var people = mongoose.model('name');

exports.getPerson = function (req, res) {
    people.findOne({ _id: req.params.id}, function(err, gotProjects) {
                if (err) {
                    console.log(err)
                } else {
                    res.send(gotProjects);
                }
    });
}

exports.getPeople = function (req, res) {
    people.find({}, function (err, gotProjects) {
        if (err) {
            console.log(err)
        } else {
            res.send(gotProjects);
        }
    });
};

exports.postPerson = function (req, res) {
    var project = new people({
        name: req.body.name,
        lat: req.body.lat,
        long: req.body.lat
    });

    project.save(function () {
        res.send("Saved " + req.body.name)
    });
};