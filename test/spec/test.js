/* global describe, it */

(function () {
    'use strict';
    describe('image array', function(){

    	it('should contain url strings', function (){
    		
    		var result = imgList[0];
    		expect(result).to.have.string('http');

    		var result = imgList[1];
    		expect(result).to.have.string('http');

    		var result = imgList[2];
    		expect(result).to.have.string('http');
    	});
    });

    describe('render function', function () {

    	it('should push the html for the image to the .slider div', function(){

    		render(0);

    		setTimeout(function() {
    			expect($('.slider').html.length).to.equal(('<img src=https://s3.amazonaws.com/ooomf-com-files/ikZyw45kT4m16vHkHe7u_9647713235_29ce0305d2_o.jpg class=img-top>').length);
    		},2000)
    	});
    });

    describe('start click function', function () {
    	it('change the image displayed every two seconds', function(){
    		$('.start').click()

    		setTimeout(function() {
    			expect($('.slider').html.length).to.equal(('<img src=https://s3.amazonaws.com/ooomf-com-files/ikZyw45kT4m16vHkHe7u_9647713235_29ce0305d2_o.jpg class=img-top>').length);
    		},4000);

    		setTimeout(function() {
    			expect($('.slider').html.length).to.equal(('<img src=https://s3.amazonaws.com/ooomf-com-files/BIR62RGGjGxN5nrbnzwu_3.jpg class=img-top>').length);
    		},6000);

    		setTimeout(function() {
    			expect($('.slider').html.length).to.equal(('<img src=https://s3.amazonaws.com/ooomf-com-files/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg class=img-top>').length);
    		},8000);

    	});

    });



})();

