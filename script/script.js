// Бегущая строка

$(function () {
    $('.marquee').marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true
    });
});

// Активные и не активные контейнеры с вопросами

$(function () {

    $('.title-question').click(function () {

        $(this).next().slideToggle(700)

        if ($(this).parent().hasClass('container-question')) {
            $(this).parent().removeClass('container-question').addClass('container-question-active')
        } else {
            $(this).parent().removeClass('container-question-active').addClass('container-question')
        }
    })
})


// Галерея изображений инструкторов, слайдер

$(function () {
    $(".img-container a").click(function (f) {
        var small_src = $(".img-instructor-big").attr('src');
        $(".img-instructor-big").hide().attr('src', $(this).attr('href')).fadeIn(500)
        $(this).hide().attr('src', "small_src").fadeIn(1000)
        f.preventDefault();
    })
})



//Отправка данных формы

$(function () {
    $(".btn-form").click(function (e) {
        var name = $("#form_1").val()
        var tel = $("#form_2").val()
        var check = $("#checkbox").is(':checked')

        if (name === "") {
            alert("Заполните свои контактные данные")
            e.preventDefault()
        } else if (tel === "") {
            alert("Заполните свои контактные данные")
            e.preventDefault()
        } else if ((name !== "") && (tel !== "") && (check === false)) {
            alert("Дайте свое согласие на обработку данных!")
            e.preventDefault()
        } else {
            true
            $("form").trigger('reset')
        }
    })
})


//Кнопка заказа звонка
$(function () {
    $(".btn-call").click(function () {
        alert("Ваша заявка принята. В ближашее время Вам перезвонят")
    })
})




$(function () {
    $(".arrow__right").click(function () {

        var attrBig = $(".img-instructor-big").attr("src")
        var small = $(".img-instructor-big").next().attr("src")
        
        alert(small)

        $(".img-instructor-big").attr("src", small)

       $(".img-instructor :last").attr("src", attrBig)

        
        
       

    })
})



//Бургер меню
$(function () {
    $(".burger-menu").click(function () {
        $(".nav-container").css({ "opacity": "1" }).slideToggle(1000)

    })
})



//Cлайд адресов 
$(function () {
    $(".next").click(function () {

        $(".active-point").removeClass("active-point").next().addClass("active-point")

        var num = $(".count__num").text()
        num++;
        $(".count__num").text(num)

        if (num === 5) {
            $(".count__num").text(1)
        }

        if ($(".active-point").index() === 4) {
            $("#one").addClass("active-point")
        }
    })
})

//Кнопка "Читать больше"


$(function () {
    $(".btn__more").click(function () {
        $(".btn__more").hide()

        $("#more").css({"display":"inline"})






    })
})