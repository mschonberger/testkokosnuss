function clearList() {
	//Listen Reset
    document.querySelector('#js-list').innerHTML = "";
}

function createElement (location) {
	//Fill List
	var text = "<li>" + location.name + "</li>";
    document.querySelector('#js-list').innerHTML += text;
    document.querySelector('#js-list li').classList.add('js-element');
    
}