document.getElementById("apply").onclick = function() {
    alert("Can't you read? I said strongest, smartest, and classiest. Why would you even bother applying?");
}

function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
  }