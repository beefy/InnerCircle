var mongoose = require("mongoose");
var people = mongoose.model('name');

exports.getPerson = function (req, res) {
    people.findOne({ _id: req.params.id}, function(err, gotPeople) {
                if (err) {
                    console.log(err)
                } else {
                    res.send(gotPeople);
                }
    });
}

exports.getPeople = function (req, res) {
    people.find({}, function (err, gotPeople) {
        if (err) {
            console.log(err)
        } else {
            res.send(gotPeople);
        }
    });
};

exports.postPerson = function (req, res) {
    var person = new people({
        name: req.body.name,
        lat: req.body.lat,
        long: req.body.lat
    });

    person.save(function () {
        res.send("Saved " + req.body.name)
    });
};