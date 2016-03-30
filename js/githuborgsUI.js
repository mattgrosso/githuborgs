(function(gitOrgs) {
  'use strict';

  $('.nameinput').on('keyup', function(event){
    event.preventDefault();
    if (event.keyCode === 13){
      gitOrgs.getUserData($(this).val());
      $(this).val("");
    }
  });

  gitOrgs.addToList = function addToList(object){
    console.log();
    if (!(object)) {
      $('.defaultmessage')
        .removeClass('hidden')
        .text("That user doesn't belong to any orgs.");
    }
    else {
      $('.defaultmessage').addClass('hidden');
      var newEntry = $('<li>')
          .append($('<img>').attr({src: object.iconurl, class: 'itemIcon'}))
          .append($('<p>').text(object.orgName).attr({class: 'itemTitle'}))
          .attr({class: 'itemEntry'});
        $('.orglist')
          .append(newEntry);
    }
  };

  window.gitOrgs = gitOrgs;

})(window.gitOrgs || {});
