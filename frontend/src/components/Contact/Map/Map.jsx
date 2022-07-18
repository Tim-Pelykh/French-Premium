import GoogleMapReact from 'google-map-react';
import './map.css';

function Map(props) {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDFXI1lPu0f4pezWlVRc69slUIN3v4GhFQ' }}
        defaultCenter={props.location}
        defaultZoom={props.zoomLevel}
      ></GoogleMapReact>
    </div>
  );
}
export default Map;
