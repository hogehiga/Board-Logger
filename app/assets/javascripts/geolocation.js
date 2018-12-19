/*
window.onload = function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
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

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
debugger;
  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
*/


window.onload = function geoFindMe() {
  var output = document.getElementById("out");
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;
    
    //ここで呼び出したい。
    //$.ajax(url: 'positions/create', type: "POST", data:{latitude,longitude});
    //$.post("/positions/create", {data:1.6,authenticity_token: getCSRFtoken()})
    //$.post("/boards/create",  {data:latitude,longitude,authenticity_token: getCSRFtoken()})
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }
  function error() {
    alert("エラー表示");
    output.innerHTML = "Unable to retrieve your location";
    errorCallback(error);
  }
  output.innerHTML = "<p>Locating…</p>";
  navigator.geolocation.getCurrentPosition(success, error);
  function errorCallback(error){
    alert("エラー表示(エラーメッセージの中)");
    var err_msg = "";
    alert(error.code)
    switch(error.code)
    {
      case 1:
        alert("位置情報の利用が許可されていません");
        //err_msg = "位置情報の利用が許可されていません";
        break;
      case 2:
        alert("位置情報の利用が許可されていません");
        err_msg = "デバイスの位置が判定できません";
        break;
      case 3:
        alert("位置情報の利用が許可されていません");
        err_msg = "タイムアウトしました";
        break;
      }
    document.getElementById("out").innerHTML = err_msg;
  }
}