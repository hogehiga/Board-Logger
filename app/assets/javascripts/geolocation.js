window.onpageshow = function geoFindMe() {
  var output = document.getElementById("out");
  var output_show = document.getElementsByClassName("out_show");
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
    if(output){//id = "out"がある時の処理
      document.getElementById("board_latitude").value = latitude;//board/index.html.erbで，id指定しないと，"board_latitude"というidになっていた
      document.getElementById("board_longitude").value = longitude;
    }
    //document.getElementsByClassName("latitude").value = latitude;
    //document.getElementsByClassName("longitude").value = longitude;
    //ここで呼び出したい。
    if(output){
      output.innerHTML = '<p>緯度は' + latitude + '° <br>経度は ' + longitude + '°</p>';
    }else if(output_show){
      output_show[0].innerHTML = '<p>緯度は' + latitude + '° <br>経度は ' + longitude + '°</p>';
      output_show[1].innerHTML = latitude;
      output_show[2].innerHTML = longitude;
    }
  }

  function error(_error) {
    if(output){
      output.innerHTML = "位置情報を測定できませんでした。";
    }else if(output_show){
      output_show.innerHTML = "位置情報を測定できませんでした。";
    }

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
  if(output){
    output.innerHTML = "<p>位置情報を測定中...</p>";
  }else if(output_show){
    output_show.innerHTML = "<p>位置情報を測定中...</p>";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
