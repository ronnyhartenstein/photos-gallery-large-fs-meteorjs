Template.file.events({
    'click': function () {
        Session.set("currFile", this.name);
    }
});
