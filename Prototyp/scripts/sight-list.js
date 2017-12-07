var test;
var position;
var distance;

function clearList(gps) {
    //Listen Reset
    document.querySelector('#js-list').innerHTML = "";
    position = gps;
}

function createElement(location) {
    //Fill List
    var object = {
        maxWidth: 2000,
        maxHeight: 2000
    }

    var you = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var loc = location.geometry.location;

    // var a = you.lng() - loc.lng();
    // var b = you.lat() - loc.lat();

    // var distance = Math.sqrt((a * a) + (b * b));
    // alert(distance);

    var origin1 = you;
    var destinationA = loc;

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin1],
        destinations: [destinationA],
        travelMode: 'DRIVING',
    }, callback);

    function callback(response, status) {
        if (status == 'OK') {
            var origins = response.originAddresses;
            var destinations = response.destinationAddresses;

            var results = response.rows[0].elements;
            for (var j = 0; j < results.length; j++) {
                var element = results[j];
                distance = element.distance.text;

                // var img = "<li class='js-element js-liImg'>" + "<img class='js-img' src='" + location.photos[0].getUrl(object) + "'>" + "</li>";
                // var name = "<li class='js-element js-name'>"+ location.name + "</li>";
                // var dis = "<li class='js-element js-distance'>Entfernung: " + distance + "</li>";

                var image = "<img class='js-img' src='" + location.photos[0].getUrl(object) + "'>";
                var locName = "<p class='js-name'>" + location.name + "</p>";
                var dist = "<p class='js-distance'>Entfernung: " + distance + "</p>";

                var li = "<li class='js-element'>" + image + locName + dist + "</li>";

                document.querySelector('#js-list').innerHTML += li;

                // document.querySelector('#js-list').innerHTML += img + name + dis;
            }
        }
    }

    test = location;
}