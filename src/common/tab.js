define(function(){
    return function (tabtitle,tabcontent) {
        $(tabcontent).eq(0).show();
        $(tabtitle).on('click', function (params) {
            $(tabcontent).hide();
            var tablabel = $(this).attr('tab-label');
            $('.' + tablabel).show();
        })
    }
});