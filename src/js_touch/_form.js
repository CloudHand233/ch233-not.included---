function formStyle() {
    // input-text
    $(".input-text").each(function () {
        $(this).addClass("default-form-text");
        $(this).find("input").on("focus",function () {
            $(this).parent(".input-text").addClass("focus-on elevation-2");
            if($(this).val() === this.defaultValue) {
                $(this).val("");
                $(this).parent(".input-text").removeClass("default-form-text");
            }
        });
        $(this).find("input").on("blur",function () {
            $(this).parent(".input-text").removeClass("focus-on elevation-2");
            if($(this).val() === "") {
                $(this).val(this.defaultValue);
                $(this).parent(".input-text").addClass("default-form-text");
            }
        });
    });

    // textarea
    $(".textarea").each(function () {
        $(this).addClass("default-form-text");
        $(this).find("textarea").on("focus",function () {
            $(this).parent(".textarea").addClass("focus-on elevation-2");
            if($(this).val() === this.defaultValue) {
                $(this).val("");
                $(this).parent(".textarea").removeClass("default-form-text");
            }
        });
        $(this).find("textarea").on("blur",function () {
            $(this).parent(".textarea").removeClass("focus-on elevation-2");
            if($(this).val() === "") {
                $(this).val(this.defaultValue);
                $(this).parent(".textarea").addClass("default-form-text");
            }
        });
    });

    // radio-icon style
    $(".radio-icon")
        .mousedown(function () {
            $(this).addClass("on");
            $(this).find("i").html("check_circle");
            $(this).siblings(".radio-icon").removeClass("on");
            $(this).siblings(".radio-icon").find("i").html("panorama_fish_eye");
            if ($(this).hasClass("on") === true) {
                $(this).find("input").prop("checked",true);
                $(this).siblings(".radio-icon").find("input").prop("checked",false);
            }
            // alert($(this).find("input").prop("checked"));
        })
        // radio-icon数据回填用
        .each(function () {
            if ($(this).find("input").prop("checked") === true) {
                $(this).addClass("on");
                $(this).find("i").html("check_circle");
            }
        });

    // checkbox-icon style
    $(".checkbox-icon")
        .mousedown(function () {
            if($(this).hasClass("on") === true) {
                $(this).find("input").prop("checked",false);
                $(this).removeClass("on");
                $(this).find("i").html("check_box_outline_blank");
            } else {
                $(this).find("input").prop("checked",true);
                $(this).addClass("on");
                $(this).find("i").html("check_box");
            }
        })
        // checkbox-icon数据回填用
        .each(function () {
            if ($(this).find("input").prop("checked") === true) {
                $(this).addClass("on");
                $(this).find("i").html("check_box");
            }
        });

    // switch
    $(".switch")
    // switch数据回填用
        .each(function () {
            if ($(this).find("input").prop("checked") === true) {
                $(this).addClass("switch-on");
                $(this).find("span").stop().animate({
                    left:'26px'
                },200);
            }
        })
        .find("label")
        .mousedown(function () {
            if($(this).parent(".switch").hasClass("switch-on") === true) {
                $(this).find("input").prop("checked",true);
                $(this).parent(".switch").removeClass("switch-on");
                $(this).find("span").stop().animate({
                    left:'6px'
                },200);
            } else {
                $(this).parent(".switch").addClass("switch-on");
                $(this).find("input").prop("checked",false);
                $(this).find("span").stop().animate({
                    left:'26px'
                },200);
            }
        });

}
