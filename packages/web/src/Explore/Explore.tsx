import {MapContainer, TileLayer} from 'react-leaflet';
import './explore.css';
import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

export function Explore() {
	return (
		<MapContainer style={{width: '100px', height: '100px'}}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		</MapContainer>
	);
}
