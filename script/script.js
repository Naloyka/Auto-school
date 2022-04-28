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


