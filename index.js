////////////////////////////////
// COUNTDOWN

var endDate = Date.parse('oct 12 2019 23:59:59');
var today = Date.parse(new Date());
var difference = Math.floor((endDate - today) / (24 * 60 * 60 * 1000));

if (difference === 1) {
    document.getElementById('countdown').innerHTML = difference + ' day to go!';
} else if (difference === 0) {
    document.getElementById('countdown').innerHTML = "Today's the day!";
} else {
    document.getElementById('countdown').innerHTML = difference + ' days to go!';
}

/////////////////////////////////
// GALLERY

var $pictures = document.getElementById('pictures');
var $image = document.getElementById('image');
var $overlay = document.getElementById('overlay');

$pictures.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery')) {
        console.log(e.target.id);
        $image.innerHTML = `<img src="images/gallery/` + e.target.id + `.jpg">`;
        $overlay.classList.remove('hidden');
    }
})

$image.addEventListener('click', function(e) {
    $overlay.classList.add('hidden');
})