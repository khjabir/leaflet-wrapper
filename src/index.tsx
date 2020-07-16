import * as React from 'react';
import {
	Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import './styles/map.css';
import './styles/leaflet.css'
import './styles/leaflet.draw.css'

const position = [51.505, -0.09];
const MapComponent = () => (
	<Map center={position} zoom={13} style={{ height : 500, width : 500 }}>
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
		/>
		<Marker position={position}>
			<Popup>
				A pretty CSS3 popup.
				<br />
				Easily customizable.
			</Popup>
		</Marker>
	</Map>
);

export default MapComponent;
