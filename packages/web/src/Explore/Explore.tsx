import * as Schema from 'hh-orion-schema';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Link} from 'react-router-dom';
import {Card, CardContent, CardHeader, Divider, Flag, FlagNameValues, Icon} from 'semantic-ui-react';
import {Loading} from '../Layout';
import {stripHtmlFromString} from '../lib/stripHtmlFromString';
import {useFetch} from '../useFetch';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export function Explore() {
	const position = {lat: 54, lng: -105};
	const {data, loading} = useFetch<Schema.documents.document.getAll.response, Schema.documents.document.getAll.params>(
		Schema.documents.document.getAll.route,
	);

	if (loading) return <Loading />;

	return (
		<>
			<MapContainer center={position} zoom={4} style={{width: '100%', height: '100vh', zIndex: 10, display: 'block'}} attributionControl={false}>
				<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" />
				{data?.map(document => {
					return (
						<Marker position={{lat: parseFloat(document.location.latitude), lng: parseFloat(document.location.longitude)}} key={document.id}>
							<Popup>
								<Link to={`/document/${document.id}`} style={{width: '100%', padding: '8px'}}>
									<Card color="yellow">
										<CardContent>
											<CardHeader>
												<Icon name="file alternate" size="large" verticalAlign="middle" />
												{document.name}
												<Flag name={document.location.country.code as FlagNameValues} style={{float: 'right'}} />
											</CardHeader>
											<Divider />
											<p style={{color: 'black'}}>{stripHtmlFromString(document.content.substring(0, 250))}...</p>
										</CardContent>
									</Card>
								</Link>
							</Popup>
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
