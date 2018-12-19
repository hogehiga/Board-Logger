window.onload = function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("latitude").value = position.coords.latitude;
    document.getElementById("longitude").value = position.coords.longitude;
    //ここで呼び出したい。
    window.open("https://maps.google.com/maps?q=" + latitude +"," + longitude ,'_blank')
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
debugger;
  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
