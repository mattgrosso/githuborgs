//What goes in here?
//This is where I'll grab the JSON from Github's server and assemble it into an object (or array)
//This will be triggered by a call from the UI


(function(gitOrgs) {
  'use strict';

  var userOrgs = "data.json";
  // var userOrgs = "https://api.github.com/users/jisaacks/orgs";

  gitOrgs.bigArraySmallArray = function bigArraySmallArray(element){
    var userDataReturn = {};
    userDataReturn.orgName = element.login;
    userDataReturn.iconurl = element.avatar_url;
    gitOrgs.addToList(userDataReturn);
  };

  $.ajax({
    type: 'GET',
    url: userOrgs,
    datatype: 'JSON',
    success: function showOrgs(data){
      data.forEach(gitOrgs.bigArraySmallArray);
    },
    error: function handleErrors(xhr){
    },
    complete: function requestDone(){
    }
  });

  window.gitOrgs = gitOrgs;

})(window.gitOrgs || {});
