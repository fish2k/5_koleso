$(document).ready(function() {
    const transitionSpeed = 200,
          dropListElem    = '.form-props-drop',
          formPropsList   = $('.form-props-list'),
          headerMain      = $('.header-main'),
          headerOffset    = headerMain.offset().top
          body            = $('body'),
          burger          = $('.header-burger')
          search          = $('.responsive-search'),
          filter          = $('.responsive-filter, .catalog-filter-close'),
          overlay         = $('.overlay')

    $('[data-toggle="tooltip"]').tooltip()

    burger.click(function () {
        body.removeClass("state-search state-filter")
        body.toggleClass('state-nav')
    })

    search.click(function () {
        body.removeClass("state-filter state-nav")
        body.toggleClass('state-search')

        $('.search-responsive-input').focus()
    })

    filter.on('click', function () {
        body.removeClass("state-search state-nav")
        body.toggleClass('state-filter')
    })

    overlay.on("click", function () {
        body.removeClass("state-nav state-search state-filter")
    })

    // fixed header
    if ( $(window).innerWidth() > 991 ) {
        $(window).scroll(function () {
            var st = $(this).scrollTop()
    
            if (st >= headerOffset) {
                $('.header-fixed-placeholder').css({
                    height: headerMain.innerHeight() + 'px',
                    marginBottom: 30
                })
                headerMain.addClass('header-fixed')
            } else {
                $('.header-fixed-placeholder').css({
                    height: 0,
                    marginBottom: 0
                })
                headerMain.removeClass('header-fixed')
            }
        })
    }
    
    // кастомная реализация select -> option
    formPropsList.click(function () {
        const dropListChild = $(this).find(dropListElem)        

        if (!dropListChild.is(':visible')) {
            $(dropListElem).stop().slideUp(transitionSpeed)
            dropListChild.stop().slideDown(transitionSpeed)

            formPropsList.removeClass('active')
            $(this).addClass('active')
        } else {
            dropListChild.stop().slideUp(transitionSpeed)
            formPropsList.removeClass('active')
        }
    })

    // передаем выбранное значение в скрытый input
    $('.form-props-drop-select').click(function () {
        const getValue = $(this).data('value') // берём значение
        console.log(`Выбрали пункт: ${getValue}`)

        // нужно будет передавать getValue в скрытый input, не сделал пока
        $(this).parent().parent().find('.form-props-list-inner').find('.form-props-current').text(getValue)
        $(this).parent().slideUp(transitionSpeed)
        formPropsList.removeClass('active')
    })
})