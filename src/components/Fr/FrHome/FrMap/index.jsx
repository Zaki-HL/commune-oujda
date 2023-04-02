import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import markerImg from '/imgs/map-mark.png';
import L from 'leaflet';

function FrMap() {
	const [mapCenter, setMapCenter] = useState([34.68361, -1.91475]);
	const markers = [
		{
			position: [34.6836111, -1.9152972, 19],
			text: '1er ',
			adress: '60000, Oujda 60000',
			googlemaps:
				'https://www.google.com/maps/place/%D8%A8%D9%84%D8%AF%D9%8A%D8%A9+%D9%88%D8%AC%D8%AF%D8%A9%E2%80%AD/@34.6836111,-1.9152972,19z/data=!4m12!1m5!3m4!2zMzTCsDQxJzAxLjAiTiAxwrA1NCc1My4xIlc!8m2!3d34.68361!4d-1.91475!3m5!1s0xd7864a5d9704fbb:0x63568ff392796cdd!8m2!3d34.6835741!4d-1.9150189!16s%2Fg%2F11b6jh5ff2',
		},
		{
			position: [34.6824261, -1.9101085, 19],
			text: '2ème ',
			adress: 'M3JR+V3W, Rue El Khartoum, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/2%C3%A8me+Arrondissement+de+police/@34.6824261,-1.9101085,19.14z/data=!4m12!1m5!3m4!2zMzTCsDQwJzU2LjAiTiAxwrA1NCczNS4zIlc!8m2!3d34.6822263!4d-1.9098066!3m5!1s0xd7863b2367a3fff:0xe043b10839ce2576!8m2!3d34.6822263!4d-1.9098066!16s%2Fg%2F11h2ndrv7z',
		},
		{
			position: [34.6825253, -1.9004406, 15],
			text: '3ème ',
			adress: 'Bd Mourabitine, Rue Ziani, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D9%84%D8%AD%D9%82%D8%A9+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%E2%80%AD/@34.6825253,-1.9004406,15z/data=!4m6!3m5!1s0xd78632f392cd94f:0xaef20999990e7264!8m2!3d34.6825253!4d-1.9004406!16s%2Fg%2F11ll5zwrk_',
		},
		{
			position: [34.6806399, -1.8884467, 19],
			text: '4ème ',
			adress: 'M4J6+5R4 Dar, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/4%C3%A9me+Arondissement+De+Police/@34.6806399,-1.8884467,19.77z/data=!4m6!3m5!1s0xd78633709fb71db:0x63c89fdb1833ed52!8m2!3d34.6803888!4d-1.8879247!16s%2Fg%2F1pv1hyj9l',
		},
		{
			position: [34.70331, -1.914418],
			text: '5ème ',
			adress: '35, Avenue Mansour Eddahbi, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B042'11.9%22N+1%C2%B054'51.9%22W/@34.7033114,-1.9151022,18z/data=!3m1!4b1!4m4!3m3!8m2!3d34.70331!4d-1.914418",
		},
		{
			position: [34.66403, -1.86772],
			text: '6ème ',
			adress: 'P6025, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B039'50.5%22N+1%C2%B052'03.8%22W/@34.6640391,-1.8698101,17.04z/data=!4m4!3m3!8m2!3d34.66403!4d-1.86772",
		},
		{
			position: [34.692414, -1.919959],
			text: '7ème ',
			adress: '30 Rue Al Alaouiyine, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B041'32.7%22N+1%C2%B055'11.9%22W/@34.692456,-1.9201515,20.31z/data=!4m4!3m3!8m2!3d34.692414!4d-1.919959",
		},
		{
			position: [34.6878352, -1.9077295],
			text: '8ème ',
			adress: 'Rue Abou Obeida Ibn Al Jarrah, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B041'16.2%22N+1%C2%B054'27.8%22W/@34.6877934,-1.9078213,21z/data=!4m4!3m3!8m2!3d34.6878352!4d-1.9077295",
		},
		{
			position: [34.6510082, -1.9438916, 17],
			text: '9ème ',
			adress: 'M325+9VG, Unnamed Road, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/9%C3%A8me+Arrondissement+de+Police+OUJDA/@34.6510082,-1.9438916,17.36z/data=!4m12!1m5!3m4!2zMzTCsDM5JzAzLjQiTiAxwrA1NicyNS4xIlc!8m2!3d34.650932!4d-1.940305!3m5!1s0xd787bcbeb1465db:0x79b4d598f3f37ad8!8m2!3d34.650932!4d-1.940305!16s%2Fg%2F11j0rgv1dm',
		},
		{
			position: [34.6716879, -1.9366606, 18.61],
			text: '10ème ',
			adress: 'M3C7+3H8, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/10+%C3%A8me+arrondissement/@34.6716879,-1.9366606,18.61z/data=!4m12!1m5!3m4!2zMzTCsDQwJzE3LjUiTiAxwrA1NicwOC44Ilc!8m2!3d34.6715384!4d-1.9357683!3m5!1s0xd78654254c4a2fb:0xe49e1be436269fa8!8m2!3d34.6715384!4d-1.9357683!16s%2Fg%2F11p5gdnvkv',
		},
		{
			position: [34.6587639, -1.8967305, 20.47],
			text: '11ème ',
			adress: 'Lot Annakhil, Hay Elquods, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/Onzi%C3%A8me+arrondissement+urbain/@34.6587639,-1.8967305,20.47z/data=!4m12!1m5!3m4!2zMzTCsDM5JzMxLjMiTiAxwrA1Myc0OC4zIlc!8m2!3d34.6586809!4d-1.8967402!3m5!1s0xd787cba6a337fd9:0x8f7817471217d9bf!8m2!3d34.6586809!4d-1.8967402!16s%2Fg%2F1tlmpp79',
		},
		{
			position: [34.688538, -1.8745615],
			text: '12ème ',
			adress: 'lazaret, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B041'18.7%22N+1%C2%B052'28.4%22W/@34.6885391,-1.8751087,19z/data=!3m1!4b1!4m4!3m3!8m2!3d34.688538!4d-1.8745615",
		},
		{
			position: [34.6798559, -1.8898822, 21],
			text: '13ème ',
			adress: 'Bd Brahim Roudani, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/13%C3%A8me+Arrondissement/@34.6798559,-1.8898822,21z/data=!4m12!1m5!3m4!2zMzTCsDQwJzQ3LjMiTiAxwrA1MycyMy4xIlc!8m2!3d34.6798029!4d-1.8897443!3m5!1s0xd786337ce2321e9:0x4c26ea0d66633519!8m2!3d34.6798029!4d-1.8897443!16s%2Fg%2F11b780vs_5',
		},
		{
			position: [34.6864747, -1.8744708, 19.96],
			text: '14ème ',
			adress: 'lazaret, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D9%84%D8%AD%D9%82%D8%A9+%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%D8%B9%D8%B4%D8%B114-%D8%AD%D9%8A+%D8%A7%D9%84%D9%81%D8%AA%D8%AD%E2%80%AD/@34.6864747,-1.8744708,19.96z/data=!4m12!1m5!3m4!2zMzTCsDQxJzExLjMiTiAxwrA1MicyNy4xIlc!8m2!3d34.68647!4d-1.8742!3m5!1s0xd786344c03bd8f7:0x172dc16c4af793b2!8m2!3d34.6865977!4d-1.87403!16s%2Fg%2F11rsf5lyp8',
		},
		{
			position: [34.664211, -1.905221],
			text: '15ème ',
			adress: 'Bd Hassan II, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B039'51.2%22N+1%C2%B054'18.8%22W/@34.6642126,-1.9060062,18z/data=!3m1!4b1!4m4!3m3!8m2!3d34.664211!4d-1.905221",
		},
		{
			position: [34.664153, -1.86829],
			text: '16ème ',
			adress: 'Sidi Yahya, Oujda',
			googlemaps:
				"https://www.google.com/maps/place/34%C2%B039'51.0%22N+1%C2%B052'05.8%22W/@34.6641547,-1.8691486,18z/data=!3m1!4b1!4m4!3m3!8m2!3d34.664153!4d-1.86829",
		},
		{
			position: [34.6623714, -1.9302326, 18.99],
			text: '17ème ',
			adress: 'Rue Ibn El Baraa, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D9%84%D8%AD%D9%82%D8%A9+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9+17%E2%80%AD/@34.6623714,-1.9302326,18.99z/data=!4m12!1m5!3m4!2zMzTCsDM5JzQ0LjQiTiAxwrA1NSc1MC42Ilc!8m2!3d34.662324!4d-1.930728!3m5!1s0xd787bb56328ac83:0xfb5d4d6f88822c9b!8m2!3d34.6623501!4d-1.9303687!16s%2Fg%2F11m9xl9f86',
		},
		{
			position: [34.6786264, -1.8961054, 15],
			text: '18ème ',
			adress: 'Bd Allal Al Fassi, Oujda',
			googlemaps:
				'https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D9%84%D8%AD%D9%82%D8%A9+%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%D8%A9+%D8%B9%D8%B4%D8%B1%E2%80%AD/@34.6786264,-1.8961054,15z/data=!4m6!3m5!1s0xd78634edba1bbaf:0x5061ac0ed0983999!8m2!3d34.6786264!4d-1.8961054!16s%2Fg%2F11c53b0lkf',
		},
	];

	const customIcon = new L.Icon({
		iconUrl: markerImg,
		iconSize: [45],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76],
	});

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
					<Marker
						key={marker.text}
						position={marker.position}
						icon={customIcon}
					>
						<Popup>
							<div className="text-center p-1">
								<h4>{marker.text} Arrondissements</h4>
								<p>{marker.adress}</p>
								<a
									href={marker.googlemaps}
									className="btn btn-primary text-light"
								>
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
