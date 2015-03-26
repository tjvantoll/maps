var dependencyObservable = require( "ui/core/dependency-observable" );
var proxy = require( "ui/core/proxy" );
var stackLayout = require( "ui/layouts/stack-layout" );

function Map() {
	this.map = MKMapView.alloc().initWithFrame( UIScreen.mainScreen().bounds );
	this.ios.addSubview( this.map );
}
Map.prototype = new stackLayout.StackLayout();
Map.prototype.updateLocation = function() {
	var location = CLLocationCoordinate2DMake( this.latitude, this.longitude ),
		span = new MKCoordinateSpan({ latitudeDelta: 0.3, longitudeDelta: 0.3 }),
		region = new MKCoordinateRegion({ center: location, span: span });

	this.map.region = region;
}

var properties = [ "latitude", "longitude" ];
properties.forEach(function( name ) {
	exports[ name + "Property" ] = new dependencyObservable.Property(
		name,
		"0",
		new dependencyObservable.PropertyMetadata(
			false,
			dependencyObservable.PropertyMetadataSettings.None,
			null
		)
	);

	Object.defineProperty( Map.prototype, name, {
		get: function() {
			return this._getValue( exports[ name + "Property" ] );
		},
		set: function( value ) {
			this._setValue( exports[ name + "Property" ], value );
			this.updateLocation();
		},
		enumerable: true,
		configurable: true
	});
});

exports.Map = Map;