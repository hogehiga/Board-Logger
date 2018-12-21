window.onpageshow = function geoFindMe() {
  var output = document.getElementById("out");//index.html.erbにある
  var output_show = document.getElementsByClassName("out_show");//show.htmlにある
  var Link = document.getElementsByClassName("link");//show.htmlにある
  if (!navigator.geolocation){
    alert("位置情報は，あなたのブラウザに対応していません。")
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    if(output){  //id = "out"がある時の処理
      document.getElementById("board_latitude").value = latitude;//board/index.html.erbで，id指定しないと，"board_latitude"というidになっていた
      document.getElementById("board_longitude").value = longitude;
    }
    //ここで呼び出したい。
    if(output_show){

      //ここから下18:00分
      var des_latitude = document.getElementsByClassName("des_latitude");
      var des_longitude = document.getElementsByClassName("des_longitude");

      Link[0].innerHTML = "<a href='https://www.google.com/maps/dir/?api=1&origin=" +latitude+ "," +longitude + "&destination=" +des_latitude[0].textContent+ ',' + des_longitude[0].textContent+  "'" + " target='_blank' class='btn btn-success'> ルート</a>"
      //ここから上18:00分
    }
  }

  function error(_error) {

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
  navigator.geolocation.getCurrentPosition(success, error);
}
