import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function FrMap() {
	const [mapCenter, setMapCenter] = useState([34.68361, -1.91475]);
	const markers = [
		{ position: [34.68361, -1.91475], text: '1er ' },
		{ position: [34.6822263, -1.9098066], text: '2ème ' },
		{ position: [34.687683, -1.919344], text: '3ème ' },
		{ position: [34.6803888, -1.8879247], text: '4ème ' },
		{ position: [34.70331, -1.914418], text: '5ème ' },
		{ position: [34.66403, -1.86772], text: '6ème ' },
		{ position: [34.692414, -1.919959], text: '7ème ' },
		{ position: [34.6878352, -1.9077295], text: '8ème ' },
		{ position: [34.650932, -1.940305], text: '9ème ' },
		{ position: [34.6715384, -1.9357683], text: '10ème ' },
		{ position: [34.6586809, -1.8967402], text: '11ème ' },
		{ position: [34.688538, -1.8745615], text: '12ème ' },
		{ position: [34.6798029, -1.8897443], text: '13ème ' },
		{ position: [34.68647, -1.8742], text: '14ème ' },
		{ position: [34.664211, -1.905221], text: '15ème ' },
		{ position: [34.664153, -1.86829], text: '16ème ' },
		{ position: [34.662324, -1.930728], text: '17ème ' },
	];

	function MapUpdater() {
		const map = useMap();
		map.setView(mapCenter);
		return null;
	}

	return (
		<div className="container">
			<MapContainer
				center={mapCenter}
				zoom={16.5}
				scrollWheelZoom={true}
				style={{ minHeight: '50vh', minWidth: '100%' }}
			>
				<MapUpdater />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers.map(marker => (
					<Marker key={marker.text} position={marker.position}>
						<Popup>
							<div className="text-center p-1">
								<h4>{marker.text} Arrondissements</h4>
								<p>address, address, address</p>
								<a href="#links" className="btn btn-primary text-light">
									Google Maps
								</a>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>

			<h2 className="mt-5 mb-3">Arrondissements</h2>
			<div>
				{markers.map(marker => (
					<button
						className="btn btn-primary me-1 my-1"
						key={marker.text}
						onClick={() => setMapCenter(marker.position)}
					>
						{marker.text}
					</button>
				))}
			</div>
		</div>
	);
}

export default FrMap;
