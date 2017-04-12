$('#sendBtn').click(function(e) {
    e.preventDefault();
    console.clear();
    $('[data-reg]').each(function() {
        var regExp = $(this).attr('data-reg');
        var val = $(this).val();
        var $container = $(this).closest('.form-group');
        var textError = $(this).attr('data-error');

        // 1. Переврка регулярним вираженням
        var result = val.search(regExp);

        // 2. Видалимо старе повідомлення про помилку
        $next = $(this).next();
        if ( $next.is('.help-block') ) {
            $next.remove();
        }

        // 3. Якщо є помилка, то
        if ( result < 0 ) {

            // 3.1. Якщо вказаний текст помилки - допишемо його під input
            if ( textError ) {
                $container.append('<span class="help-block">' + textError + '</span>');
            }
            // 3.2. Зробимо поле для вводу червоним
            $container.addClass('has-error');

        // 4. Якщо помилки немає, то
        } else {

            // 4.1. Заберемо виділення червоним
            $container.removeClass('has-error');
        }
    });
});

$('.slider').slider();