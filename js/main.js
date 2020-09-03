$(document).ready(function() {
    const transitionSpeed = 200,
          dropListElem = '.form-props-drop',
          formPropsList = $('.form-props-list');

    $('[data-toggle="tooltip"]').tooltip()

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

    $('.form-props-drop-select').click(function () {
        const getValue = $(this).data('value')
        console.log(`Выбрали пункт: ${getValue}`)

        $(this).parent().parent().find('.form-props-list-inner').find('.form-props-current').text(getValue)
        $(this).parent().slideUp(transitionSpeed)
        formPropsList.removeClass('active')
    })
})