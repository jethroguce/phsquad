function autoPiracy(){
  if (document.getElementsByClassName('captchaImage').length > 0) {
    alert('capcha');
  } else {
    var capture = document.getElementsByClassName('capture');
    if (capture.length > 0){
      capture[0].click();
      var next =  Math.round(Math.random() * 3000) + 180000;
      setTimeout(autoPiracy, next);
    } else {
      alert('Cannot Find Capture button, stopping script');
    }
  }
}

autoPiracy();
