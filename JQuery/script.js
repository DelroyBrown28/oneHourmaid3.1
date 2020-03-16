$(document).ready(function () {


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

        $(".basicClean-requirementBlurb").toggle();
        $(".selectService-Blurb").toggle();
        $(".selectService-Blurb").unbind(basicCleanTextBox);
        $(".basicClean-requirementBlurb").unbind(basicCleanTextBox);
        $(".basicCleanButton").unbind(basicCleanTextBox);

    };

    $(".basicClean-submitButton").click(revertBasicClean);

    function revertBasicClean() {
        $(".basicCleanButton").animate({
            height: "50px",
            width: "70%",
            opacity: "1",
        });
        $(".basicClean-inputField").animate({
            display: "none",
        });

        $(".basicCleanButton").unbind(revertBasicClean);

    }

    $(".deepClean-submitButton").click(revertFromBasicClean);

    function revertFromBasicClean() {
        $(".basicCleanButton").addClass("basicCleanButton");
        $(".basicClean-inputField").addClass(".basicClean-inputField");
        $(".selectService-Blurb").addClass(".basicClean-inputField");
        $(".basicClean-requirementBlurb").css("display", "none");
        $(".deepCleanButton").addClass("deepCleanButton");
        $(".deepCleanButton").animate({
            opacity: "1",
        });
        $(".movingInOutButton").animate({
            opacity: "1",
        });




    }



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
        $(".deepClean-requirementBlurb").toggle();
        $(".selectService-Blurb").toggle();
        $(".selectService-Blurb").unbind(deepCleanTextBox);




    };

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

        $(".movingInOut-requirementBlurb").toggle();
        $(".selectService-Blurb").toggle();
        $(".selectService-Title").delay(300).animate({
            top: "3%",
        });


    };

    $(".nextButton").click(animateUnderline);

    function animateUnderline() {

        $(".animatedUnderline").animate({
            width: "15%",
            opacity: "1",
        });
    };






});