import {MapContainer, TileLayer} from 'react-leaflet';
import {Divider} from 'semantic-ui-react';

export function Explore() {
	const position = {lat: 54, lng: -105};

	return (
		<>
			<MapContainer center={position} zoom={4} style={{width: '100%', height: '100vh', zIndex: 10, display: 'block'}} attributionControl={false}>
				<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" />
			</MapContainer>
			<Divider />
			<p style={{fontSize: '11px'}}>
				Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC
			</p>
		</>
	);
}
