/* 1. Grab the input */
// document
//   .querySelector(".container-button")
//   .addEventListener("click", function () {
//     var input = document.querySelector("input").value;
//     console.log(input);
//     pushDOM(input);
//   });

document
  .querySelector(".container-textinput")
  .addEventListener("keyup", function (e) {
    console.log(e);
    var input = document.querySelector("input").value;
    if (e.which === 13) {
      pushDOM(input);
    }
  });
// input.addEventListener("click", function () {});

/* 2. DO the data stuff with API */
var url =
  "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var giphyAjaxCall = new XMLHttpRequest();
giphyAjaxCall.open("GET", url);
giphyAjaxCall.send();
giphyAjaxCall.addEventListener("load", function (e) {
  var data = e.target.response;
  pushDOM(data);
});

/* Show mw the GIFs */
function pushDOM(input) {
  var response = JSON.parse(input);
  // console.log(response);
  var imgurl = response.data[2].images.fixed_height.url;
  console.log(imgurl);
  var container = document.querySelector(".js-container");

  container.innerHTML = "<img src=" + imgurl + " />";
  //   console.log(container);
}
