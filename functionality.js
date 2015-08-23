press1 = false;
press2 = false;
press3 = false;
press4 = false;
press5 = false;
press6 = false;

function sf(){
	if(!press1){
		document.getElementById('SF').innerHTML = "<p>Our favorite places to visit are Fisherman's Wharf (Pier 39), Chinatown, and Alcatraz Island.  Make sure to stop for Blue Bottle Coffee at the Ferry Building!<p>Train: Take <a href=\"http://www.caltrain.com/\" target=\"_blank\" alt=\"Caltrain\">Caltrain</a> North from the Santa Clara station (across the street from the mission) and then catch <a href=\"http://www.sfmta.com/\" target=\"_blank\" alt=\"SF MUNI\">MUNI</a>.</p><p>Driving: Take 101 North or 280 North (1 hour 10 minutes)</p>";
		press1 = true;
		}
	else{
		document.getElementById('SF').innerHTML = "";
		press1=false;
	}
}

function sc(){
	if(!press2){
		document.getElementById('SC').innerHTML = "<p>Visit <a href=\"https://www.cagreatamerica.com/\" target=\"_blank\" alt=\"California's Great America\">Great America</a>, our local amusement park.  Our favorite rides are Flight Deck (formerly known as Top Gun) and The Grizzly (old fashioned wooden rollercoaster).<p>(20 minutes north)</p>";
		press2 = true;
		}
	else{
		document.getElementById('SC').innerHTML = "";
		press2=false;
	}
}

function sj(){
	if(!press3){
		document.getElementById('SJ').innerHTML = "<p>Visit the Tech Museum of Innovation or the San Jose Museum of Art in downtown San Jose.  Families with kids will also have fun at the Children's Discovery Museum and Happy Hollow Park and Zoo.</p><p>(5 minutes south)</p>";
		press3 = true;
		}
	else{
		document.getElementById('SJ').innerHTML = "";
		press3=false;
	}
}

function scb(){
	if(!press4){
		document.getElementById('SCB').innerHTML = "<p>Visit the Santa Cruz Beach Boardwalk or take a hike through the redwoods in the Santa Cruz mountains.</p><p>Take 17 South (37 minutes)</p>";
		press4 = true;
	}
	else{
		document.getElementById('SCB').innerHTML = "";
		press4 = false;
	}
}

function g(){
	if(!press5){
		document.getElementById('G').innerHTML = "<p>The \"Garlic Capital of the World\" grows a majority of the garlic in the U.S.  Gilroy is also home to a vegetable-themed park for kids, <a href=\"https://www.gilroygardens.org/\" target=\"_blank\" alt=\"Gilroy Gardens\">Gilroy Gardens.</a></p><p>Take 101 South (41 minutes)</p>";
		press5 = true;
	}
	else{
		document.getElementById('G').innerHTML = "";
		press5 = false;
	}
}

function m(){
	if(!press6){
		document.getElementById('M').innerHTML = "<p>Monterey is a cute little beach town and home of the world-famous <a href=\"http://www.montereybayaquarium.org/\" target=\"_blank\" alt=\"Monterey Bay Aquarium\">Monterey Bay Aquarium</a>.  Make sure to stop for clam chowder on Fisherman's Wharf.</p><p>Take 17 South to 1 South (1 hour 20 minutes)</p>";
		press6 = true;
	}
	else{
		document.getElementById('M').innerHTML = "";
		press6 = false;
	}
}