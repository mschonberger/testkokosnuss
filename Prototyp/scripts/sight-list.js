function clearList() {
	//Listen Reset
    document.querySelector('#js-list').innerHTML = "";
}

function createElement (location) {
	//Fill List
	var text = "<li class='js-element'>" + location.name + "</li>";
    document.querySelector('#js-list').innerHTML += text;

}