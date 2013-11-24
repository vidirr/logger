if (Meteor.isClient) {


  Meteor.subscribe("facebookServices");

  Template.greeting.greeting = function () {
    return "Welcome to Logger";
  };

  Template.greeting.userName = function() {
    var name;
    if(Meteor.user()) return Meteor.user().profile.name;
    else return "Please log in!";
  }

  Template.greeting.userImage = function()  {
    
    if(Meteor.user().services)  {
      return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    }
    else return "/silouette.jpg";
  }



}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });

}


