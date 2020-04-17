/* 1. Grab the input */
document
  .querySelector(".container-button")
  .addEventListener("click", function () {
    var input = document.querySelector("input").value;
    console.log(input);
    // pushDOM(input);
    searchGiphy(input);
  });

document
  .querySelector(".container-textinput")
  .addEventListener("keyup", function (e) {
    // console.log(e);
    var input = document.querySelector(".js-userinput").value;
    console.log(input);

    if (e.which === 13) {
      // pushDOM(input);
      searchGiphy(input);
    }
  });
// input.addEventListener("click", function () {});

/* 2. DO the data stuff with API */

function searchGiphy(input) {
  var url =
    "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input;

  // AJAX Request
  var giphyAjaxCall = new XMLHttpRequest();
  giphyAjaxCall.open("GET", url);
  giphyAjaxCall.send();
  giphyAjaxCall.addEventListener("load", function (e) {
    var data = e.target.response;
    pushDOM(data);
  });
}
/* Show me the GIFs */

function pushDOM(input) {
  var response = JSON.parse(input);
  // console.log(response);
  var imgurl = response.data;
  // [2].images.fixed_height.url;
  // console.log(imgurl);
  imgurl.forEach(function (image) {
    var src = image.images.fixed_height.url;
    console.log(src);
    var container = document.querySelector(".js-container");

    container.innerHTML += "<img src=" + src + ' class= "container-image"/>';
  });

  //   console.log(container);
}
