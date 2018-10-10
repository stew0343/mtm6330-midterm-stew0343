var endDate = Date.parse('oct 12 2019');
var today = new Date();
var difference = Math.round((endDate - today) / (24 * 60 * 60 * 1000)) + 1;

if (difference === 1) {
    document.getElementById('countdown').innerHTML = difference + ' day to go!';
} else if (difference === 0) {
    document.getElementById('countdown').innerHTML = "Today's the day!";
} else {
    document.getElementById('countdown').innerHTML = difference + ' days to go!';
}