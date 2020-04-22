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


    var labels = "S"
    var locations = [{
        lat: 51.630770,
        lng: -0.735230,
    }, ];


    var marker = new google.maps.Marker({
        position: map.getCenter(),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6.5,
        },
        draggable: true,
        map: map
    });

}

//SEND/RECEIVE EMAIL FUNCTION


function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
            "user_name": contactForm.name.value,
            "user_email": contactForm.emailaddress.value,
            "project_request": contactForm.shortDescrip.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("MESSAGE SENDING FAILED!!", error);
            }
        );
        
    return false;
}