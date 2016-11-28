var main = function() {

    // фиксированная менюшка слева
    $('.navigation-fixed ul li').on('mouseover', function() {
        $(this).removeClass('fs-18 fs-12 fs-8');
        $(this).addClass('fs-18');
        $(this).siblings().removeClass('fs-18 fs-12 fs-8');

        $(this).next().addClass('fs-12');
        $(this).prev().addClass('fs-12');
        $(this).next().next().addClass('fs-8');
        $(this).prev().prev().addClass('fs-8');
    });

    $('.navigation-fixed ul').on('mouseleave', function() {
        var li-active = $(this).children('.active');
        $(this).children().removeClass('fs-18 fs-12 fs-8');
        li-active.addClass('fs-18');
        li-active.next().addClass('fs-12');
        li-active.next().next().addClass('fs-8');
        li-active.prev().addClass('fs-12');
        li-active.prev().prev().addClass('fs-8');

    });

    $('.navigation-fixed ul li').on('click', function() {
        if (!($(this).hasClass('active'))) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');

            if ($(this).hasClass('news')) {
                $('#news-content').show(0);
                $('#item-2-content').hide(0);
                $('#item-3-content').hide(0);
            }
            if ($(this).hasClass('item-2')) {
                $('#news-content').hide(0);
                $('#item-2-content').show(0);
                $('#item-3-content').hide(0);
            }
            if ($(this).hasClass('item-3')) {
                $('#news-content').hide(0);
                $('#item-2-content').hide(0);
                $('#item-3-content').show(0);
            }
        }
    });
}
$(document).ready(main);
