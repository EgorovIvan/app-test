$(document).ready(function () {
    // var ratesTags = $('.rates__item');
    // var buttonTags = $('.rates__block-btns');

    $('.select').on('click', '.create-popup__select', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            $('.select__list').removeClass('open-list');
        } else {
            $(this).addClass('open');
            $('.select__list').addClass('open-list');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.create-popup__select').removeClass('open');
        $('.select__list').removeClass('open-list');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());

      $('.create-popup__select').value = $(this).text()
        // for (let i = 0; i < ratesTags.length; i++) {
        //     if ($(this).data("option") == ratesTags[i].id) {
        //         $(ratesTags[i]).css(
        //             'display', 'grid'
        //         );
        //         $(buttonTags[i]).css(
        //             'display', 'flex'
        //         )
        //     } else {
        //         $(ratesTags[i]).css(
        //             'display', 'none'
        //         );
        //         $(buttonTags[i]).css(
        //             'display', 'none'
        //         )
        //     }
        // }
    });
});

$(document).click(function (e) {
  if (!$(e.target).closest('.select').length) {
    $('.create-popup__select').removeClass('open');
    $('.select__list').removeClass('open-list');
    $('.select__list').fadeOut();
  }
});
