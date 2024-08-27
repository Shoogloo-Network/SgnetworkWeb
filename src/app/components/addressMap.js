"use client";
// import React from 'react'

// const AddressMap = () => {

//       // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
//   const apiKey = 'AIzaSyD1yiUg1HaYJJa6lM_klAWrJIc0_-Lw7fg';

//   // Replace 'Berkeley,CA' with the desired location
//   const location = 'Shoogloo Group';

//   // Other parameters for the Static Maps API
//   const zoom = 14;
//   const size = '400x400';

//   const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=${zoom}&size=${size}&key=${apiKey}`;

//   return (
//     <div>
//     <div>
//       <h2>Static Map</h2>
//       <img src={mapUrl} alt="Google Map" />
//     </div>

//     </div>
//   )
// }

// export default AddressMap

// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const AddressMap = () => {
//   const apiKey = 'AIzaSyD1yiUg1HaYJJa6lM_klAWrJIc0_-Lw7fg';

//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: 37.7749, // Replace with your desired latitude
//     lng: -122.4194, // Replace with your desired longitude
//   };

//   return (
//     <div>
//       <h2>Interactive Map</h2>
//       <LoadScript googleMapsApiKey={apiKey}>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={14}
//           center={defaultCenter}
//         >
//           <Marker position={defaultCenter} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default AddressMap;

// Your React component file (e.g., src/components/GoogleMap.js)

import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1yiUg1HaYJJa6lM_klAWrJIc0_-Lw7fg&callback=initMap`;
    script.defer = true;
    script.async = true;

    script.addEventListener("load", () => {
      // The Google Maps API script has loaded, and it's safe to initialize the map.
      initMap();
    });

    document.head.appendChild(script);

    // Clean up the script tag to avoid memory leaks
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  //   const initMap = () => {
  //     // Your initMap logic goes here
  //     const chicago = new window.google.maps.LatLng(41.85, -87.65);
  //     const map = new window.google.maps.Map(document.getElementById('map'), {
  //       center: chicago,
  //       zoom: 3,
  //     });
  //     const coordInfoWindow = new window.google.maps.InfoWindow();

  //     coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
  //     coordInfoWindow.setPosition(chicago);
  //     coordInfoWindow.open(map);
  //     map.addListener('zoom_changed', () => {
  //       coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
  //       coordInfoWindow.open(map);
  //     });
  //   };

  // ... (previous code)

  const initMap = () => {
    // Your initMap logic goes here
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.4194851, lng: 77.0335849 }, // Default to San Francisco coordinates
      zoom: 13,
    });

    // Use the geocoder to convert an address to coordinates
    const geocoder = new window.google.maps.Geocoder();
    const address =
      "UNIT 461 – 463, 4th Floor, JMD Megapolis, Sector 48, Gurgaon, Haryana – 122001, India "; // Replace with your desired address

    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        // Optionally, add a marker at the location
        const marker = new window.google.maps.Marker({
          map,
          position: location,
          title: "Your Location",
        });

        // console.log("Geocoding Results:", results);
        marker.addListener('click', () => {
            // Open a link to navigate using the device's default navigation app
            const navigationLink = `https://www.google.com/maps/dir/?api=1&destination=${location.lat()},${location.lng()}`;
            window.open(navigationLink, '_blank');
          });

      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  };

  // ... (remaining code)

  const createInfoWindowContent = (latLng, zoom) => {
    // Your createInfoWindowContent logic goes here
    // ...

    return "Your info window content";
  };

  return (
    <div className="p-5">
      {/*<div
        id="map"
        style={{ height: "500px", width: "100%" }}
  ></div>*/}
      <div className="w-full">
        <iframe className="w-full h-[600px]" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shoogloo%20Network%20Private%20Limited%20%20UNIT%20461%20%E2%80%93%20463,%204th%E2%80%AFFloor,%20JMD%20Megapolis,%20Sector%2048,%20Gurgaon,%20Haryana%20%E2%80%93%20122001,%20India%E2%80%AF+(Shoogloo%20Network%20Private%20Limited%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          
      </iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
