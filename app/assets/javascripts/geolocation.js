window.onpageshow = function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    //output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    alert("位置情報は，あなたのブラウザに対応していません。")
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude)
    //document.getElementById("latitude").value = latitude;
    //document.getElementById("longitude").value = longitude;
    document.getElementsByClassName("latitude").value = latitude;
    document.getElementsByClassName("longitude").value = longitude;
    //ここで呼び出したい。
    output.innerHTML = '<p>緯度は' + latitude + '° <br>経度は ' + longitude + '°</p>';
  }

  function error(_error) {
    output.innerHTML = "位置情報を測定できませんでした。";

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
  output.innerHTML = "<p>位置情報を測定中...</p>";
  navigator.geolocation.getCurrentPosition(success, error);
}
