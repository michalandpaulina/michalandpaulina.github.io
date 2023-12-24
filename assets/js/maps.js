var map = null

function initMap() {
    var location = {lat: 52.4031, lng: 22.0564};
    var location_church = {lat: 52.4085, lng: 22.2521};
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 14,
        center: location,
        scrollwheel: true,
        draggable: true
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var marker_church = new google.maps.Marker({
        position: location_church,
        map: map
    });

    // startButtonEvents();
}

function focusVenue() {
    var loc = new google.maps.LatLng(52.4031, 22.0564);
    map.setCenter(loc);
}

function focusChurch() {
    var loc = new google.maps.LatLng(52.4085, 22.2521);
    map.setCenter(loc);
}



// function startButtonEvents () {
//     var btnZoomToVenue = document.getElementById('btnZoomToVenue')
//     if (btnZoomToVenue) {  
//         btnZoomToVenue.addEventListener('click', function(){
//             focusVenue();
//         });
//     }

//     var btnZoomToChurch = document.getElementById('btnZoomToChurch')
//     if (btnZoomToChurch) {
//         btnZoomToChurch.addEventListener('click', function(){
//             focusChurch();
//         });
//     }
// }

$('#btn-venue').click(function () {
    focusVenue();
});
$('#btn-church').click(function () {
    focusChurch();
});
$('#btn-show-map').click(function () {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
    $('#btn-venue').toggleClass('toggle-map-content');
    $('#btn-church').toggleClass('toggle-map-content');
});
$('#btn-show-content').click(function () {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
    $('#btn-venue').toggleClass('toggle-map-content');
    $('#btn-church').toggleClass('toggle-map-content');
});