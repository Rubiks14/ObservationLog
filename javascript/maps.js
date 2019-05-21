document.addEventListener('DOMContentLoaded', function () {
let myKey = config.MY_KEY;
if (document.querySelectorAll('#map').length > 0)
{
    if (document.querySelector('html').lang)
    lang = document.querySelector('html').lang;
    else
    lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=' + myKey + '&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
}
});


function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40, lng: -95},
        zoom: 3
    });
}