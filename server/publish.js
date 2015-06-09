Meteor.publish('imageLists', function(pfad) {
    check(pfad, String);
    return Images.find("~/public/images" + pfad);
});
