Template.body.helpers({
    files: function () {
        return Images.find()
    },
    currFile: function () {
        return Session.get("currFile");
    }
});
