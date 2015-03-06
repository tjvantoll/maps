var place,
	panel;

function loadMap() {
	var map = MKMapView.alloc().initWithFrame(
			UIScreen.mainScreen().bounds ),
		location = CLLocationCoordinate2DMake( place.Latitude, place.Longitude ),
		span = new MKCoordinateSpan({ latitudeDelta: 0.3, longitudeDelta: 0.3 }),
		region = new MKCoordinateRegion({ center: location, span: span });

	map.region = region;
	panel.addSubview( map );
	loadedMap = true;
}

exports.navigatedTo = function( args ) {
	var page = args.object;
	place = page.navigationContext;
	page.ios.title = place.Name + ", " + place.Country;
	loadMap();
};

exports.loadMap = function( args ) {
	panel = args.object.ios;
}
