var counter = [];
function autoPiracy(){
  function msToMMSS(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  if (document.getElementsByClassName('captchaImage').length > 0) {
    counter.push({'now': new Date(), 'message': 'capcha validation'});
    alert('capcha');
  } else {
    var capture = document.getElementsByClassName('capture');
    if (capture.length > 0){
      capture[0].click();
      var next =  Math.round(Math.random() * 10000) + 170000;
      counter.push({'now': new Date(), 'next': msToMMSS(next)});
      setTimeout(autoPiracy, next);
    } else {
      counter.push({'now': new Date(), 'message': 'cannot find capture button'});
      alert('Cannot Find Capture button, stopping script');
    }
  }
}

autoPiracy();
