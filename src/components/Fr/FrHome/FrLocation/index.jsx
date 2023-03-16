import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
	componentDidMount() {
		// create map
		const map = L.map('map').setView([51.505, -0.09], 13);

		// add tile layer
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);

		// add marker
		L.marker([51.5, -0.09]).addTo(map);
	}

	render() {
		return <div id="map" style={{ height: '500px' }}></div>;
	}
}

export default Map;
