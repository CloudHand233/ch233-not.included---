function tabStyle() {
    $(".tabs").each(function () {

        $(this).find(".tabs-tt").find("li").eq(0).addClass("current");
        $(this).find(".tab-cont").eq(0).show();

        $(this).find(".tabs-tt").find("li").on("mousedown",function () {

            if ($(this).hasClass("current") == false) {
                $(this).siblings("li").removeClass("current");
                $(this).addClass("current");
                var $i = $(this).index();
                $(this).parent(".tabs-tt").siblings(".tabs-cont").find(".tab-cont").hide();
                $(this).parent(".tabs-tt").siblings(".tabs-cont").find(".tab-cont").eq($i).fadeIn();
            }

        });
    });
}