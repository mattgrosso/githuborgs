(function(gitOrgs) {
  'use strict';

  gitOrgs.bigArraySmallObject = function bigArraySmallObject(element){
    var userDataReturn = {};
    userDataReturn.orgName = element.login;
    userDataReturn.iconurl = element.avatar_url;
    gitOrgs.addToList(userDataReturn);
  };

  gitOrgs.getUserData = function getUserData(username){
    var userOrgsURL = "https://api.github.com/users/" + username + "/orgs";
    $.ajax({
      type: 'GET',
      url: userOrgsURL,
      datatype: 'JSON',
      success: function showOrgs(data){
        $('.itemEntry').remove();
        data.forEach(gitOrgs.bigArraySmallObject);
      },
      error: function handleErrors(xhr){
      },
      complete: function requestDone(){
      }
    });
  };

  window.gitOrgs = gitOrgs;

})(window.gitOrgs || {});
