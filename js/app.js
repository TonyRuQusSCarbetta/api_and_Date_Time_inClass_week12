// // $("#firstButton").click(function() {
// //   $(".row").toggleClass("animated rotateIn");
// // });
//
// //JAVASCSRIPT MATH
// //JAVASCRIPT RANDOM NUMBERS
// // console.log(Math.ceil(random() * 20));
//
// //math.floor rounds down
//
// // JAVASCRIPT RANDOM NAMES
// // const names - ['tony', 'kingsley', 'brian'];
// //
// // console.log(names[Math.floor(Math.random() * 3)]);
//
//
//
//
// //JAVASCRIPT DATE
// // let date = new Date();
//
// //hours
// let hour = date.getHours();
//
// //minutes
// let mins = date.getMinutes();
//
// //seconds
// let sec = date.getSeconds();
//
//
//
//
// setTimeout(function () {
//
//   console.log(`${hour} : ${mins} : ${date}`);
// }, 3000);
//
//
// setInterval(function () {
//
//   let hour = date.getHours();
//
//
//   let mins = date.getMinutes();
//
//
//   let sec = date.getSeconds();
//   if (hour > 12) hour = hour -12;
//
//
// }, 1000);
//
// //!!!!!!!!!!!!USE MOMENT JS LIBRARY FOR ANYTHING TIME RELATED!!!!!!!!!!!!
//
//
//
//
//
//
//
//
// //AJAX
//
// //api
// // https://developers.giphy.com/dashboard/
// //api key
// // Uf9MIxGSpfrSZJQbRwKs70BhKvq2ee1M
// //google chrome json extension
// // https://chrome.google.com/webstore/search/json%20formatter
// //postman api app
// //https://www.getpostman.com/
//
//
// //javascript, jQuery
// // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// // xhr.done(function(data) { console.log("success got data", data); });
//
// //most common api requests are C.R.U.D. Create, Read, Update, Delete...
// //most common api request are also GET PUT POST DELETE
//
// //get - gets data
// //put - updates data
// // post - creates new data
//
// //C.R.U.D.
// // CREATE = POST, READ = GET, UPDATE= PUT, DELETE = DELETE


//---------------------------------------------------------------------------------
//INSTRUCTIONS
//loop over array
//get url for the gif
//display on the screen
const API_KEY = 'Uf9MIxGSpfrSZJQbRwKs70BhKvq2ee1M';
//res stands for request
$.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${API_KEY}&limit=5`).then(function (res) {
  console.log(res);
  console.log(res.data);

  var images = res.data;
  console.log(images);

  //loop over the array
  for (var i = 0; i < images.length; i++) {
      var url = images[i].images.downsized.url;
      var img = document.createElement('img');
      img.src = url;
      document.body.appendChild(img);

  }
});
//---------------------------------------------------------------------------------
// BRIAN'S QUICK EXAMPLE
// const userSearch = input.val
// than userSearch is before api key

// TO MAKE AN ERROR
// throw Error('yout flubbed')
//.catch


//we went over ajax promises,
//---------------------------------------------------------------------------------

//github.com/toddmotto/public-apis
// axios API for React
