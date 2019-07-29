// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let glob = false;
let timeInMinutes = 1;


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total = 0) {
      alert("ya spent too long");
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function updateAll() {
  document.cookie = "myClock=; expires=Thu, 01 Jan 2000 00:00:00 GMT";
  if(document.cookie && document.cookie.match('myClock')){
    // get deadline value from cookie
    var deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
  } else {
    // create deadline 10 minutes from now
    var timeInMinutes = document.getElementById('myTextarea').value;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInMinutes*60*1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline + '; path=/; domain=https://supersavvy.github.io/testclock/';
  }
  initializeClock("clockdiv", deadline);
}
