$(document).ready(function () {


    //DISPLAYS tap to add MESSAGE WHEN HOVERED
    $(".bedroomsButton").mouseenter(showTapToAddPopUp);

    function showTapToAddPopUp() {
        $(".tapToAddRoomPopUp").fadeIn();
        $(".typeInBoxPopUp").fadeIn(800);
    }


    $(".bedroomsButton").mouseleave(hideTapToAddPopUp);

    function hideTapToAddPopUp() {
        $(".tapToAddRoomPopUp").fadeOut(800);
        $(".typeInBoxPopUp").fadeOut();
    }


    //INCREMENTS ROOMS BY 1
    let addRoom = document.querySelectorAll(".addRoom");
    let subtractRoom = document.querySelectorAll(".subtractRoom");

    addRoom.forEach((el) => {
        el.addEventListener("click", (e) => {
            let input = e.target.closest(".bedroomsButton,.bathroomsButton,.kitchensButton").querySelector(".roomsAmount");
            input.value = parseInt(input.value) + 1;
        });
    });

    subtractRoom.forEach((el) => {
        el.addEventListener("click", (e) => {
            let input = e.target.closest(".bedroomsButton,.bathroomsButton, .kitchensButton").querySelector(".roomsAmount");
            input.value = parseInt(input.value) - 1;

        });
    });

});

//GOOGLE MAPS API
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        disableDefaultUI: true, //DISABLES GOOGLE MAPS DEFAULT FUNCTIONS
        center: {
            lat: 51.630770,
            lng: -0.735230,
        }
    });
   

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var locations = [{
        lat: 51.630770,
        lng: -0.735230,
    }, ];

    var markers = locations.map(function (locations, i) {
        return new google.maps.Marker({
            position: locations,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}

