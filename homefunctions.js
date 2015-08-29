coverimages = ["images/trevormichelle.jpg", "images/disneyland.jpg", "images/trevormichelle2.jpg", "images/russianriver.jpg", "images/spacemountain.jpg"];
index = 0;
size = 4;

function imageSlider(){
	index = index+1;
	if(index > size){
		index = 0;
	}
	document.getElementById('slider').src = coverimages[index];
}

window.onload = function() {            
    setInterval("imageSlider()", 5000);
}
