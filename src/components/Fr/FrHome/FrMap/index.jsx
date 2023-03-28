import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function FrMap() {
	const [mapCenter, setMapCenter] = useState([34.68361, -1.91475]);
	const markers = [
		{ position: [34.68361, -1.91475], text: 'Commune Oujda 1' },
		{ position: [51.506, -0.06], text: 'Marker 2' },
		{ position: [51.507, -0.01], text: 'Marker 3' },
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
