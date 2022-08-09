function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 11.0168, lng: 76.9558 },
      zoom: 15,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        var x=place.geometry.location.lat();
       var y=place.geometry.location.lng();
       var _kCord = new google.maps.LatLng(-36.874694, 174.735292);
    var _pCord = new google.maps.LatLng(10.9959, 76.9670);
    console.log(google.maps.geometry.spherical.computeDistanceBetween(_pCord, _kCord));
    var dist=google.maps.geometry.spherical.computeDistanceBetween(_pCord,place.geometry.location)/1000;


        document.getElementById('lat').innerHTML=x;
       document.getElementById('lon').innerHTML=y;
       document.getElementById('rai').innerHTML=dist;

        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);

      // document.getElementById('location').innerHTML=place.formatted_address;
      // document.getElementById('lat').innerHTML=place.geometry.location.lat();
      // document.getElementById('lon').innerHTML=place.geometry.location.lng();
      // var x=place.geometry.location.lat();
      // var y=place.geometry.location.lng();
      // document.getElementById('lat').innerHTML=x;
      // document.getElementById('lon').innerHTML=y;
     });
  }
