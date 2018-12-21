window.onpageshow = function geoFindMe() {
  var output = document.getElementById("out");//index.html.erbにある
  var output_show = document.getElementsByClassName("out_show");//show.htmlにある
  var Link = document.getElementsByClassName("link");//show.htmlにある
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

      //ここから下18:00分
      var des_latitude = document.getElementsByClassName("des_latitude");
      console.log("出力できるか? 緯度 = "+des_latitude[0].textContent);
      var des_longitude = document.getElementsByClassName("des_longitude");
      console.log("出力できるか? 経度 = "+ des_longitude[0].textContent);

      Link[0].innerHTML = "<a href='https://www.google.com/maps/dir/?api=1&origin=" +latitude+ "," +longitude + "&destination=" +des_latitude[0].textContent+ ',' + des_longitude[0].textContent+  "'" + " target='_blank' class='btn btn-success'> ルート</a>"
      //ここから上18:00分
      console.log(latitude);
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

/*
function GoogleURL(){
  alert("GoogleURLが呼び出された");
  var des_latitude = document.getElementsByClassName("des_latitude");
  console.log("出力できるか? 緯度 = "+des_latitude[0].textContent);
  var des_longitude = document.getElementsByClassName("des_longitude");
  console.log("出力できるか? 経度 = "+ des_longitude[0].textContent);
}
*/