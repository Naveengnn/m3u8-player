var link = btoa('#m3u8-placeholder');
$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $(link)[0].value);
        window.location.href = './player' + '#' + $(link)[0].value;
    });
});
