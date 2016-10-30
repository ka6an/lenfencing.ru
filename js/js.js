var main = function() {

    // ДОСКА ОБЪЯВЛЕНИЙ
    $('.points li').on('click', function() {
        var prev_point = $('.points li.current');
        var cur_point = $(this);
        var cur_cont = $('.important .cont.current');

        prev_point.removeClass('current');
        cur_point.addClass('current');

        switch (true) {
            case cur_point.hasClass('point_1'):
                cur_cont.removeClass('current');
                cur_cont = $('.important .cont.cont_1');
                cur_cont.addClass('current');
                break;
            case cur_point.hasClass('point_2'):
                cur_cont.removeClass('current');
                cur_cont = $('.important .cont.cont_2');
                cur_cont.addClass('current');
                break;
            case cur_point.hasClass('point_3'):
                cur_cont.removeClass('current');
                cur_cont = $('.important .cont.cont_3');
                cur_cont.addClass('current');
                break;
            case cur_point.hasClass('point_4'):
                cur_cont.removeClass('current');
                cur_cont = $('.important .cont.cont_4');
                cur_cont.addClass('current');
                break;
        }
    });

    // фиксированная менюшка слева
    $('.navigation_fixed ul li').on('mouseover', function() {
        $(this).removeClass('fs_18 fs_12 fs_8');
        $(this).addClass('fs_18');
        $(this).siblings().removeClass('fs_18 fs_12 fs_8');

        $(this).next().addClass('fs_12');
        $(this).prev().addClass('fs_12');
        $(this).next().next().addClass('fs_8');
        $(this).prev().prev().addClass('fs_8');
    });

    $('.navigation_fixed ul').on('mouseleave', function() {
        var li_active = $(this).children('.active');
        $(this).children().removeClass('fs_18 fs_12 fs_8');
        li_active.addClass('fs_18');
        li_active.next().addClass('fs_12');
        li_active.next().next().addClass('fs_8');
        li_active.prev().addClass('fs_12');
        li_active.prev().prev().addClass('fs_8');

    });

    $('.navigation_fixed ul li').on('click', function() {
        if (!($(this).hasClass('active'))) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');

            if ($(this).hasClass('item_1')) {
                $('#item_1_cont').show(0);
                $('#item_2_cont').hide(0);
                $('#item_3_cont').hide(0);
            }
            if ($(this).hasClass('item_2')) {
                $('#item_1_cont').hide(0);
                $('#item_2_cont').show(0);
                $('#item_3_cont').hide(0);
            }
            if ($(this).hasClass('item_3')) {
                $('#item_1_cont').hide(0);
                $('#item_2_cont').hide(0);
                $('#item_3_cont').show(0);
            }
        }
    });

    $('#item_2_cont').children('.category').children('p').on('click', function() {
        $(this).prev().removeClass('active');
        $(this).addClass('active');
        $(this).next().removeClass('active');
    });

}
$(document).ready(main);
