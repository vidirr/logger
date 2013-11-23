if (Meteor.isClient) {


  Meteor.subscribe("facebookServices");
  currentUser = Meteor.user();

  Template.greeting.greeting = function () {
    return "Welcome to Logger!";
  };

  Template.greeting.userName = function() {
    var name;
    if(currentUser) return currentUser.profile.name;
    else return "Please log in!";
  }

  Template.greeting.userImage = function()  {
    
    if(Meteor.user())  {
      foo = Meteor.user();
      return Meteor.user().services;
      //return "http://graph.facebook.com/" + currentUser.services.facebook.id + "/picture/?type=large";
    }
    else return "/silouette.jpg";
  }



}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
  Meteor.publish("facebookServices", function() {
    Meteor.users.find({_id:this._id}, {fields: {"facebook.services.id":true}});
  });
}


