//imports
var HsMainzDatensatz
$.getJSON("HsMainzDatensatz.json", function(json) {
    HsMainzDatensatz=json // this will show the info it in firebug console
});


greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    //iconUrl:"./assets/marker.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    //iconUrl:"./assets/marker.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  

  blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    //iconUrl:"./assets/marker.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  
  orangeIcon = new L.Icon({
    iconUrl: 'http://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    //iconUrl:"./assets/marker.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });



function createOSMquery(bounds){
    var url=""
    var overpassQuery= 'amenity'
    var overpassQueryVal ='doctors'
    move()               
    var nodeQuery = 'node[' + (overpassQueryVal==""?overpassQuery:"'"+overpassQuery+"'='"+overpassQueryVal+"'") + '](' + bounds + ');';
    var wayQuery = 'way[' + (overpassQueryVal==""?overpassQuery:"'"+overpassQuery+"'='"+overpassQueryVal+"'") + '](' + bounds + ');';
    var relationQuery = 'relation[' + (overpassQueryVal==""?overpassQuery:"'"+overpassQuery+"'='"+overpassQueryVal+"'") + '](' + bounds + ');';
    var query = '?data=[out:json][timeout:15];(' + nodeQuery + wayQuery + relationQuery + ');out%20geom;';
    var baseUrl = 'https://overpass-api.de/api/interpreter';
    var url = baseUrl + query;
   
    return url

  }


function addElementAsMarker(element,marker){

if(element.type=="node"){
    var marker = L.marker([element.lat, element.lon], {icon: marker}).addTo(map);

    var popup = L.popup({
        maxHeight: 700,
        maxWidth:500
      })
      .setLatLng([51.5, -0.09])
      .setContent("<div style='font-size:20px;'> ID:"+element.id+"<br>"+ this.buildPopupTemplate(element)+ "<div>"    )

        marker.bindPopup(popup) 
     
    }
}


function buildPopupTemplate(json){
    var template=""
    
    //console.log(json)
    
    for( var key in json){
    
    
      if(key==="tags"){
       template+= buildPopupTemplate(json[key]) 
      }
      if(key==="checkedProperties"){
       
        template+= "<h4>differences (compared Value is HsMainz Data)</h4> "
     
       template+=JSON.stringify(json[key])
        
    template+="<hr style='border: solid 1px black' >"

    }else{
    
        template+= "<p> key: " + (key) +" value: " + json[key] +"</p>"
       }
    }
    
    return template
    }



// Karte erzeugen    

var map = L.map('map',{zoomControl: false}).setView({lat:50.000,lon:8.250}, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

//OSM url erzeugen

 var url=createOSMquery([49.946580628907704,8.174514770507812,50.06066538593667,8.332958221435547])
var OSMDatensatz
move()
 //OSM Daten ziehen
 $.get(url, function (osmDataAsJson) {
     console.log( osmDataAsJson)
  OSMDatensatz=osmDataAsJson
  move()
 // showDataSets()
  })


  function showDataSets(){
    var dataSets={OSMData:OSMDatensatz.elements,HsMainzData:HsMainzDatensatz} 
    console.log( JSON.stringify(dataSets))
    
    move()
  /*  $.post("http://opendata.gi.hs-mainz.de/openhealth-compare",JSON.stringify( dataSets), function(data, status){
      var json =JSON.parse( data)
      move()
      console.log(json)
     
        json.Gruppe1.forEach(element => {
            

            if(element.checkedProperties.errorsFound==true){
                console.log(element)
                addElementAsMarker(element, redIcon )
            }else(
                addElementAsMarker(element, greenIcon )
            )
            move()
            });
      
            json.Gruppe2.forEach(element => {
                addElementAsMarker(element, orangeIcon)
                });
                move()
                json.Gruppe3.forEach(element => {
                    addElementAsMarker(element, blueIcon )
                    });
      });
*/

      $.ajax({
        type: "POST",
        dataType: "application/json",
        url: "http://opendata.gi.hs-mainz.de/openhealth-compare",
        //url: "http://localhost:8000/compareDatasets",
        data: JSON.stringify(dataSets),
        success: function(data) { 
          response = jQuery.parseJSON(data);
          console.log(response)
      },
      
      })

     function success( e){
       console.log(e)
     } 



  }





  var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}