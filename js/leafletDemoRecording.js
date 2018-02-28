//Leaflet Demo Recording

var map = L.map('map',{
	center: [45, -98],
	zoom: 8,
	minZoom: 3,
	maxZoom: 14,
	zoomControl: false
})

var terminal = L.tileLayer('https://api.mapbox.com/styles/v1/nobrien33/cje7h8vje9svr2rmw0bo2buqy/tiles/256/{z}/{x}/{y}?
			    access_token=pk.eyJ1Ijoibm9icmllbjMzIiwiYSI6ImNqZTdmNTV1NjAxYWMyeHFwbjI4ZmI2OWsifQ.Bw4VJI6HqHyqiPIzZ2bFdQ',{

	attribution:"Thank you mapbox",
	minZoom: 3
	

}).addTo(map);