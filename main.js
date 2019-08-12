let button = document.getElementById('search');
let input = document.querySelector("input").value;
let url = 'http://api.apixu.com/v1/current.json?key=d2cc34c3a62245bba37130908191008&q=';
button.addEventListener("click", httpGet);

function httpGet(url) {

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://api.apixu.com/v1/current.json?key=d2cc34c3a62245bba37130908191008&q=Minsk', true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  }
  httpGet('talk.json')
  .then(function(response) {
      console.log("Success!", response);
    }, function(error) {
      console.error("Failed!", error);
  });
  