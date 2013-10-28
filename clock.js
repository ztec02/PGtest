window.addEventListener('load',function(){
	
	setTimeout(function(){window.scrollTo(0, 1)}, 100);
	
	document.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);
	
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	var clockBord = new Image();
	clockBord.src = 'images/clock_bord.png';
	
	var short = new Image();
	short.src = 'images/short.png';

	var long = new Image();
	long.src = 'images/long.png';

	var sweep = new Image();
	sweep.src = 'images/sweep.png';

	var center = new Image();
	center.src = 'images/center.png';

	var intrID = setInterval(function(){
		var date = new Date();
		
		var h = date.getHours() % 12;
		var m = date.getMinutes();
		var s = date.getSeconds();

		context.clearRect(0, 0, 320, 320);
		
		context.drawImage(clockBord, 0, 0);
		
		context.save();
		context.translate(160, 160);
		
		context.save();
		context.rotate((30 * h + (30 * date.getMinutes()/60)) * Math.PI / 180);
		context.drawImage(short, -160, -160);
		context.restore();

		context.save();
		context.rotate(6 * m * Math.PI / 180);
		context.drawImage(long, -160, -160);
		context.restore();

		context.save();
		context.rotate(6 * s * Math.PI / 180);
		context.drawImage(sweep, -160, -160);
		context.restore();
		
		context.restore();
		context.drawImage(center, 0, 0);
		
	}, 500);
	
},true);

