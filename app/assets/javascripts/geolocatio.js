function geoFindMe() {
  var output = document.getElementById("out");
  alert("呼び出されている");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    //ここで呼び出したい。

    //$.ajax(url: 'positions/create', type: "POST", data:{latitude,longitude});
    //$.post("/positions/create", {data:1.6,authenticity_token: getCSRFtoken()})
    $.post("/boards/create", {data:latitude,longitude})

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    window.open("https://maps.google.com/maps?q=" + latitude +"," + longitude ,'_blank')
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
debugger;
  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
