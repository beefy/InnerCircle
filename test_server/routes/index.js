var mongoose = require("mongoose");
var projects = mongoose.model('project');

exports.getProject = function (req, res) {
    projects.findOne({ _id: req.params.id}, function(err, gotProjects) {
                if (err) {
                    console.log(err)
                } else {
                    res.send(gotProjects);
                }
    });
}

exports.getProjects = function (req, res) {
    projects.find({}, function (err, gotProjects) {
        if (err) {
            console.log(err)
        } else {
            res.send(gotProjects);
        }
    });
};

exports.postProjects = function (req, res) {
    var project = new projects({
        title: req.body.title
    });

    project.save(function () {
        res.send("Saved " + req.body.title)
    });
};