//This will be the module that handles all of the UI
//It will have a button that will call the correct function from the Data UI and it will display all of the orgs

(function(gitOrgs) {
  'use strict';

  gitOrgs.addToList = function addToList(object){
    var newEntry = $('<li>')
        .append($('<img>').attr({src: object.iconurl, class: 'itemIcon'}))
        .append($('<p>').text(object.orgName).attr({class: 'itemTitle'}))
        .attr({class: 'itemEntry'});
      $('.orglist')
        .append(newEntry);
  };

  window.gitOrgs = gitOrgs;

})(window.gitOrgs || {});
