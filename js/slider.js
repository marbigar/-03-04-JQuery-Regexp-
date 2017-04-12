(function($){
    $.fn.slider = function (options){

        var slider = this;
        var count = this.find('.item').length;

        // КОНСТРУКТОР
        // 1. Створимо пагінатор
        slider.append('<div class="paginator"></div>');
        for ( i = 0; i < count; i++ ) {
            slider.find('.paginator').append('<div class="page"></div>');
        }
        slider.find('.paginator .page:first-child').addClass('active');

        // 2. Створимо стрілочки
        slider.append('<div class="arrows"></div>');
        slider.find('.arrows').append('<div class="prev"></div>');
        slider.find('.arrows').append('<div class="next"></div>');

        // ФУНКЦІЇ
        // 3. Клік на пагінатор
        slider.find('.page').click(function() {
            var number = $(this).index();
            setPage(number);
        });

        // 4. Відкрити попереднє фото
        slider.find('.prev').click(function() {
            var $active = slider.find('.item.active');
            var $prev = $active.prev();
            var number;

            // 4.1. Якщо попередній існує - беоемо його номер
            if ( $prev.is('.item') ) {
                number = $prev.index();
            // 4.2. Якщо не існує - останній
            } else {
                number = count - 1;
            }
            setPage(number);
        });

        // 5. Відкрити наступне фото
        slider.find('.next').click(function() {
            var $active = slider.find('.item.active');
            var $next = $active.next();
            var number;

            if ( $next.is('.item') ) {
                number = $next.index();
            } else {
                number = 0;
            }
            setPage(number);
        });

        // 6. Включає картинку по номеру
        function setPage(number) {
            slider.find('.item').removeClass('active');
            slider.find('.item:eq(' + number + ')').addClass('active');

            slider.find('.page').removeClass('active');
            slider.find('.page:eq(' + number + ')').addClass('active');
        }

        return this;
    }
})(jQuery);