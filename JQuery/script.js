$(document).ready(function () {

    $(".nextButton").click(animateUnderline);

    function animateUnderline() {

        $(".animatedUnderline").animate({
            width: "15%",
            opacity: "1",
        });
    };


    $(".basicCleanButton").click(basicCleanTextBox);

    function basicCleanTextBox() {
        $(".basicCleanButton").animate({
            height: "550px",
        });
        $(".basicClean-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
        $(".requirement-Blurb").show();
        $(".selectService-Blurb").hide();
    };

    $(".deepCleanButton").click(deepCleanTextBox);

    function deepCleanTextBox() {
        $(".deepCleanButton").animate({
            height: "550px",
        });
        $(".deepClean-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
    };

    $(".movingInOutButton").click(deepCleanTextBox);

    function deepCleanTextBox() {
        $(".movingInOutButton").animate({
            height: "550px",
        });
        $(".movingInOut-inputField").animate({
            opacity: "1",
            height: "80%",
            width: "70%",
        });
    };




});