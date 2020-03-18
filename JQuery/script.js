$(document).ready(function () {

    //expands BASIC CLEAN button
    $(".basicCleanButton").click(basicCleanTextBox);

    function basicCleanTextBox() {
        $(".basicCleanButton").animate({
            height: "550px",
            top: "10%",
        });
        $(".basicClean-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
        $(".basicClean-submitButton").animate({
            opacity: "1",
            zindex: "1",
        });
        $(".deepCleanButton").animate({
            opacity: "0",
        });
        $(".movingInOutButton").animate({
            opacity: "0",
        });
        $(".selectService-Title").hide();
        $(".basicClean-requirementBlurb").fadeIn();
        $(".selectService-Blurb").fadeOut();
        $(".selectService-Blurb").unbind(basicCleanTextBox);
        $(".basicClean-requirementBlurb").unbind(basicCleanTextBox);
        $(".basicCleanButton").unbind(basicCleanTextBox);

    };

    //expands DEEP CLEAN button
    $(".deepCleanButton").click(deepCleanTextBox);

    function deepCleanTextBox() {
        $(".deepCleanButton").animate({
            height: "550px",
        });
        $(".deepClean-submitButton").animate({
            opacity: "1",
            zindex: "1",
        });

        $(".deepClean-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
        $(".basicCleanButton").animate({
            opacity: "0",
        });
        $(".movingInOutButton").animate({
            opacity: "0",
        });
        $(".selectService-Title").hide();
        $(".deepClean-requirementBlurb").fadeIn();
        $(".selectService-Blurb").fadeOut();
        $(".selectService-Blurb").unbind(deepCleanTextBox);




    };

    //expands MOVING IN/OUT button
    $(".movingInOutButton").click(movingInOutTextBox);

    function movingInOutTextBox() {
        $(".movingInOutButton").animate({
            height: "550px",
            bottom: "10%"
        });
        $(".movingInOut-submitButton").animate({
            opacity: "1",
            zindex: "1",
        });

        $(".movingInOut-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
        $(".deepCleanButton").animate({
            opacity: "0",
        });
        $(".basicCleanButton").animate({
            opacity: "0",
        });
        $(".selectService-Title").hide();
        $(".movingInOut-requirementBlurb").fadeIn();
        $(".selectService-Blurb").fadeOut();
        $(".selectService-Title").delay(300).animate({
            top: "3%",
        });


    };



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