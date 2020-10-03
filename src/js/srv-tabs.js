$(document).ready(function() {

    $('body').on('click', '.services__tabs-btn a', function() {
        $('.services__tabs-btn a').removeClass('active');
        $(this).addClass('active');

        let href = $(this).attr('href');
        $('.services__tab-item-wrap').removeClass('srv-active').removeClass('srv-in');
        let id = $(href).addClass('srv-active');
        setTimeout(function(){
            $(href).addClass('srv-in');
        }, 200);
        return false;
    });
});