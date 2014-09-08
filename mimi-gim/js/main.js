
      $(document).ready(function () {
        function onpageload() { //This function checks to see if there are valuses stored in sessionStorage
          if (sessionStorage["yourname"]) {
             $('#yourname').val(sessionStorage["yourname"]);
          }
          else {
            alert("Enter your name and hometown!")
          };
          if (sessionStorage["hometown"]) {
             $('#hometown').val(sessionStorage["hometown"]);
          };
        };
        onpageload();
        });
      $('.stored').keyup(function () {
      sessionStorage[$(this).attr('name')] = $(this).val();
      });
      $('#testForm').submit(function() {
      alert("Your name is " + sessionStorage["yourname"] + ". Your hometown is " + sessionStorage["hometown"] + ". Thanks for playing!");
      });

