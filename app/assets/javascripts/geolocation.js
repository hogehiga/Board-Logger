
window.onload = function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    //output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    alert("位置情報は，あなたのブラウザに対応していません。")
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    //document.getElementById("latitude").value = position.coords.latitude;
    //document.getElementById("longitude").value = position.coords.longitude;
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;

    //ここで呼び出したい。
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }

  function error(_error) {
    output.innerHTML = "Unable to retrieve your location";

    switch(_error.code){
      case 1:
        alert("位置情報の利用が許可されていません");
      break;
      case 2:
        alert("デバイスの位置が判定できません");
      break;
      case 3:
        alert("タイムアウトしました");
      break;
    }
  }
debugger;
  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}