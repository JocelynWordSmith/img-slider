
// var showInfo = _.template($('.info-master').text());

// function renderArr (array, destination){
// 	array.forEach(function(module){
// 		var rendered = showRepos(module);
// 		destination.prepend(rendered);
// 	});
// };
// var apiObj;

// function renderObj (obj, destination){
// 		apiObj = obj;
// 		console.log(obj);
// 		var rendered = showInfo(obj);
// 		destination.prepend(rendered);
// 	}

// $.getJSON('http://gateway.marvel.com:80/v1/public/comics?format=comic&title=X-men&apikey=ecbc9156149622b1e7ffc3da73eea458').done(function(obj){
// 	renderObj(obj, $('.info-list'));
// });
  // .done(function(data) {
  //   console.log( "second success" );
  //   renderArr(data, $('.info-list'));
  // })
  // .fail(function() {
  //   console.log( "error" );
  // })
  // .always(function() {
  //   console.log( "complete" );
  // });

// function addComic (url) {
//    $('.infolist').prepend('<img src=' + url + '.jpg>')
// }


// apiObj.data.results.forEach(function(entry){
// if (entry == 'images') {
//   console.log(entry.path)
// }
// })

// for (var i = 0; i <= (apiObj.data.results[i].length - 1); i++) {

// 	if (apiObj.data.results[i].images[0] && apiObj.data.results[i].images !=[]){
// 	console.log(i)
// 	$('.info-list').prepend('<img src=' + apiObj.data.results[i].images[0].path + '.jpg >');	
// }};




var imgList = ['https://s3.amazonaws.com/ooomf-com-files/ikZyw45kT4m16vHkHe7u_9647713235_29ce0305d2_o.jpg', 'https://s3.amazonaws.com/ooomf-com-files/BIR62RGGjGxN5nrbnzwu_3.jpg', 'https://s3.amazonaws.com/ooomf-com-files/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg' ];


function Render () {	
var i = 0;
	//sets i to zero, which is used to index the imgList
		//will cycle through the images every 2 seconds forever
	this.loop =	setInterval(function () {
		//checks to see if the index of imgList being targeted is undefined, and if so
		//it will reset the index to zero
		i = i == imgList.length - 1 ? 0      : i += 1;
		//calls the render function and passes the current i counter 
		var url = imgList[i];
		$('.slider').html('<img src=' +url+ ' class=img-top>');

		}, 2000);

	this.stop = clearInterval(this.loop);
}

//sets image url and delays, then renders
$('.start').click(function (){
	render = new Render();
	render.loop;
});

//i = i == imgList.length - 1 ? 0      : i += 1;
//set to   |if this equals       this |do this | else do this
	
