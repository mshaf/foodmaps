$( document ).ready(function() 
  {
$("#form").submit(function(e){
        e.preventDefault();
      var lt = $("#lat").val();
      var ln = $("#lng").val();
      var fd = $("#food").val();
      alert(lt + "," + ln);
      
$.ajax({
    url:"https://api.foursquare.com/v2/venues/search?client_id=U14GLXIXCWH0EIWLA2URF4Z1FW323XRQRILC4MFCUIODE2OQ&client_secret=CLPVFJG13T0GGR3PGGLN0MD4R1MC1VK5YDMSLEPAFBNVOUEA&v=20130815&ll="+lt+","+ln+"&query="+fd,
    method:'GET',
    success:function(data){

      map = new GMaps({
  div: '#map',
  lat: lt,
  lng: ln,
});
      for(var i = 0; i < data.response.venues.length; i++){ map.addMarker({
  lat: data.response.venues[i].location.lat,
  lng: data.response.venues[i].location.lng,
  title: data.response.venues[i].name,
  infoWindow: {
  content: data.response.venues[i].name
},
  
});
    }
  },
  
    error:function(){
      alert("error!")
    }
  })
});
});

