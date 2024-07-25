import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Divider} from 'semantic-ui-react';
import {useFetch} from '../useFetch';
import * as Schema from 'hh-orion-schema';
import {Loading} from '../Layout';

export function Explore() {
	const position = {lat: 54, lng: -105};
	const {data, loading} = useFetch<Schema.documents.document.getAll.response, Schema.documents.document.getAll.params>(
		Schema.documents.document.getAll.route,
	);

	if (loading) return <Loading />;
	console.log(data);
	return (
		<>
			<MapContainer center={position} zoom={4} style={{width: '100%', height: '100vh', zIndex: 10, display: 'block'}} attributionControl={false}>
				<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" />
				{data?.map(document => {
					return (
						<Marker position={{lat: parseFloat(document.location.latitude), lng: parseFloat(document.location.longitude)}}>
							<Popup>{document.name}</Popup>
						</Marker>
					);
				})}
				;
			</MapContainer>
			<Divider />
			<p style={{fontSize: '11px'}}>
				Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC
			</p>
		</>
	);
}
