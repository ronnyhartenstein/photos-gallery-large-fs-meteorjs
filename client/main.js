Template.body.helpers({
    files: function () {
        return [
            {name: 'test1.jpg', url: '/media/IMAG0004.jpg'},
            {name: 'test2.jpg', url: '/media/IMAG0005.jpg'}];
    },
    currFile: function () {
        return Session.get("currFile");
    }
});
