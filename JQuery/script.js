$(document).ready(function () {


    $(".basicClean").click(showBasicClean);

    function showBasicClean() {
        $(".basicCleanWrap").animate({
            left: "0px",
        });
        $(".mainPageWrap").animate({
            right: "500px",
        });

    }

    $(".basicCleanDescrip-button").click(revertBasicClean);

    function revertBasicClean() {

        $(".basicCleanWrap").animate({
            left: "500px",
        });
        $(".mainPageWrap").animate({
            right: "0px",
        });

    }

    $(function () {
        $("#progressbar").progressbar({
            value: 37
        });
    });






});