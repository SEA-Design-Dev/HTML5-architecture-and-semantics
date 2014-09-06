function savetext() {
    var saved = document.getElementById ("textArea").value;
    if (saved != localStorage.savedtext) {
      localStorage.savedtext = saved;
      }
    document.getElementById ("textArea").innerHTML = saved.length;
    }
function startup() {
    if (typeof (Storage) === undefined) {
      document.getElementById ("textArea").innerHTML = ", which unfortunately is not available in this browser";
      }
    else {
      if (localStorage.savedtext === undefined) {
        localStorage.savedtext = "";
        }
    document.getElementById ("textArea").value = localStorage.savedtext;
    self.setInterval (function () {savetext ()}, 1000); //call every secondΩ
    }
    }
startup();

