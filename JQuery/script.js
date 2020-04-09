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

    //REMOVES FORM INPUTS THAT AREN'T IN FOCUS
    //TO SAVE KEYBOARD POP UP FROM PUSHING ELEMETS
    $("#nameField").focusin(function () {
        $("#contactField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#streetAddress").fadeOut();
        $("#townCity").fadeOut();
        $("#postcode").fadeOut();
        $("#cleaning_description_field").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#nameField").focusout(function () {
        $("#contactField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#streetAddress").fadeIn();
        $("#townCity").fadeIn();
        $("#postcode").fadeIn();
        $("#cleaning_description_field").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });

    $("#contactField").focusin(function () {
        $("#nameField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#streetAddress").fadeOut();
        $("#townCity").fadeOut();
        $("#postcode").fadeOut();
        $("#cleaning_description_field").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#contactField").focusout(function () {
        $("#nameField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#streetAddress").fadeIn();
        $("#townCity").fadeIn();
        $("#postcode").fadeIn();
        $("#cleaning_description_field").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });

    $("#streetAddress").focusin(function () {
        $("#nameField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#contactField").fadeOut();
        $("#townCity").fadeOut();
        $("#postcode").fadeOut();
        $("#cleaning_description_field").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#streetAddress").focusout(function () {
        $("#nameField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#contactField").fadeIn();
        $("#townCity").fadeIn();
        $("#postcode").fadeIn();
        $("#cleaning_description_field").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });

    $("#townCity").focusin(function () {
        $("#nameField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#contactField").fadeOut();
        $("#streetAddress").fadeOut();
        $("#postcode").fadeOut();
        $("#cleaning_description_field").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#townCity").focusout(function () {
        $("#nameField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#contactField").fadeIn();
        $("#streetAddress").fadeIn();
        $("#townCity").fadeIn();
        $("#cleaning_description_field").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });

    $("#postcode").focusin(function () {
        $("#nameField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#contactField").fadeOut();
        $("#streetAddress").fadeOut();
        $("#townCity").fadeOut();
        $("#cleaning_description_field").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#postcode").focusout(function () {
        $("#nameField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#contactField").fadeIn();
        $("#streetAddress").fadeIn();
        $("#townCity").fadeIn();
        $("#cleaning_description_field").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });

    $("#cleaning_description_field").focusin(function () {
        $(".descriptionBoxWrap").animate({
            bottom: "40%",
        }); //PUSHES TEXT BOX UP PTHE PAGE TO GIVE ROOM TO THE POP UP KEYBOARD
        $("#nameField").fadeOut();
        $(".cleaningLocation_title").fadeOut();
        $("#contactField").fadeOut();
        $("#streetAddress").fadeOut();
        $("#townCity").fadeOut();
        $("#postcode").fadeOut();
        $(".findCleanerWrap").fadeOut();
    });

    $("#cleaning_description_field").focusout(function () {
        $(".descriptionBoxWrap").animate({
            bottom: "0%",
        }); //BRINGS TEXT BOX BACK DOWN TO ORIGINAL STATE
        $("#nameField").fadeIn();
        $(".cleaningLocation_title").fadeIn();
        $("#contactField").fadeIn();
        $("#streetAddress").fadeIn();
        $("#townCity").fadeIn();
        $("#postcode").fadeIn();
        $(".findCleanerWrap").fadeIn();
    });


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
        zoom: 10,
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

