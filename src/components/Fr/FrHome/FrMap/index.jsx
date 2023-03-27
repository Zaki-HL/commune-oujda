import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import ImgMarker from '/imgs/map-mark.png';

function FrMap() {
	const [viewport, setViewport] = useState({
		longitude: -1.9149963212022796,
		latitude: 34.68364610941581,
	});

	const [markerCoordinates, setMarkerCoordinates] = useState({
		longitude: viewport.longitude,
		latitude: viewport.latitude,
	});

	const positions = [
		{
			name: 'test',
			longitude: -1.9149963212022796,
			latitude: 34.68364610941581,
		},
		{
			name: 'place 2',
			longitude: -1.9139832042680856,
			latitude: 34.68383315406636,
		},
		{
			name: 'place 3',
			longitude: -1.9128508774641813,
			latitude: 34.68350852484969,
		},
	];

	useEffect(() => {
		setMarkerCoordinates({
			longitude: viewport.longitude,
			latitude: viewport.latitude,
		});
	}, [viewport]);

	const handlePlaceClick = (longitude, latitude) => {
		setViewport({
			...viewport,
			longitude,
			latitude,
			transitionDuration: 1000,
		});
		setMarkerCoordinates({
			// update the marker coordinates
			longitude,
			latitude,
		});
	};

	return (
		<div className="App container py-5">
			<div className="heading mb-3 p-3">
				{positions.map(position => (
					<span
						key={position.name}
						onClick={() =>
							handlePlaceClick(position.longitude, position.latitude)
						}
					>
						{position.name}
					</span>
				))}
			</div>

			<MapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
				mapboxApiUrl={process.env.REACT_APP_MAPBOX_API_URL}
				mapLib={maplibregl}
				{...viewport}
				zoom="16.5"
				onViewportChange={nextViewport => setViewport(nextViewport)}
				style={{
					width: '100%',
					height: '50vh',
					borderRadius: '1rem',
				}}
				mapStyle="https://api.maptiler.com/maps/streets/style.json?key=LrVj9aeSCQ1kjp2lhM8D"
				interactive={false}
			>
				<Marker // render a single marker with the marker coordinates
					longitude={markerCoordinates.longitude}
					latitude={markerCoordinates.latitude}
				>
					<img style={{ width: '2rem' }} src={ImgMarker} alt="marker" />
				</Marker>
			</MapGL>
		</div>
	);
}

export default FrMap;
