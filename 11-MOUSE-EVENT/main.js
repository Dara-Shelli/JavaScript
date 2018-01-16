let hoverMe = document.getElementsByClassName('hoverMe');

for (let i = 0; i < hoverMe.length; i++) {
	hoverMe[i].addEventListener('mouseover', function(event) {
		this.style.visibility = 'hidden';

	});
};


// ex-2

let reapper = document.querySelector('.reapper');
console.log(reapper);

	reapper.addEventListener('click',function(event){

		for (i = 0; i < hoverMe.length; i++) {

			if (hoverMe[i].style.visibility == 'hidden') {
				hoverMe[i].style.visibility = 'visible';

						};
					};

		
});


	// ex-3

	let xAxis = document.querySelector('.x-axis');
	let yAxis = document.querySelector('.y-axis');

	let displayCoordinates = function(event){
		xAxis.innerHTML = event.pageX;
		yAxis.innerHTML = event.pageY;
	}

	window.addEventListener("mousemove", displayCoordinates);



