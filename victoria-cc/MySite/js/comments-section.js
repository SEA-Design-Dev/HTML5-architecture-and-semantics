$(document).ready(function () {
  function load() {
    if (localStorage["comment"]) {
      $('#comment').val(localStorage["comment"]);
    }
    if (localStorage["post-one"]) {
      $('#post-one').text(localStorage["post-one"]);
    }
    if (localStorage["post-two"]) {
      $('#post-two').text(localStorage["post-two"]);
    }
    if (localStorage["post-three"]) {
      $('#post-three').text(localStorage["post-three"]);
    }
  }

  function save() {
    localStorage[$(this).attr('id')] = $(this).val();
  }

  function submit() {
    if (localStorage["comment"]){
      if (localStorage["post-one"] == undefined){
        localStorage["post-one"] = localStorage["comment"];
      }
      else if (localStorage["post-two"] == undefined){
        localStorage["post-two"] = localStorage["post-one"];
        localStorage["post-one"] = localStorage["comment"];
      }
      else{
        localStorage["post-three"] = localStorage["post-two"];
        localStorage["post-two"] = localStorage["post-one"];
        localStorage["post-one"] = localStorage["comment"];
      }
      localStorage["comment"] = "";
    }
  }
  $('#comment').keyup(save);
  $('.submit-button').click(submit);
  load();
});
