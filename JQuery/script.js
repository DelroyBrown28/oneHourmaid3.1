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