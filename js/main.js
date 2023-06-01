$('document').ready()
{
    // if ($(window).width() < 1200) {
    //     $("#carousel-inner").addClass("carousel-inner");
    //     $(".carousel-div").addClass("carousel-item text-center");
    // }
    // else {
    //     $("#carousel-inner").addClass("d-flex justify-content-evenly");
    // }


    $(".custom-btn").on('click',function()
    {   
        $(".custom-btn").removeClass("primarycolor");
        $(this).addClass("primarycolor");
    });
}