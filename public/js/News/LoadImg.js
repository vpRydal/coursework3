$(document).ready(function () {
    $('#news-img').bind('change', function (e) {
        var input = $(this)[0];
        if (input.files && input.files[0]) {
            if (input.files[0].type.match('image.*')) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    console.log(e.target.result);
                    $('#news-img-area').append($('<img>', {'src':e.target.result}));
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                console.log('ошибка, не изображение');
            }
        } else {
            console.log('хьюстон у нас проблема');
        }
    })
});
