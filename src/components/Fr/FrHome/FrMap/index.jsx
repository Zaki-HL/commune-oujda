import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function FrMap() {
	const [mapCenter, setMapCenter] = useState([34.68361, -1.91475]);
	const markers = [
		{ position: [34.68361, -1.91475], text: '1er arrondissement' },
		{ position: [34.6822263, -1.9098066], text: '2ème Arrondissement' },
		{ position: [34.687683, -1.919344], text: '3ème arrondissement' },
		{ position: [34.6803888, -1.8879247], text: '4ème arrondissement' },
		{ position: [34.703310, -1.914418], text: '5ème arrondissement' },
		{ position: [34.66403, -1.86772], text: '6ème arrondissement' },
		{ position: [34.692414, -1.919959], text: '7ème arrondissement' },
		{ position: [34.6878352, -1.9077295], text: '8ème arrondissement' },
		{ position: [34.650932, -1.940305], text: '9ème arrondissement' },
		{ position: [34.6715384, -1.9357683], text: '10ème arrondissement' },
		{ position: [34.6586809, -1.8967402], text: '11ème arrondissement' },
		{ position: [34.688538, -1.8745615], text: '12ème arrondissement' },
		{ position: [34.6798029, -1.8897443], text: '13ème arrondissement' },
		{ position: [34.686470, -1.874200], text: '14ème arrondissement' },
		{ position: [34.664211, -1.905221], text: '15ème arrondissement' },
		{ position: [34.664153, -1.868290], text: '16ème arrondissement' },
		{ position: [34.662324, -1.930728], text: '17ème arrondissement' },
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
						<Popup>{marker.text}</Popup>
					</Marker>
				))}
			</MapContainer>
			<div>
				{markers.map(marker => (
					<button
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
