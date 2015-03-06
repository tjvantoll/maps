var place,
	observableModule = require( "data/observable" ),
	data = new observableModule.Observable();

function buildUrl() {
	return "http://maps.googleapis.com/maps/api/staticmap?center=" +
		place.Latitude + "," + place.Longitude +
		"&zoom=6&size=500x800&scale=2&key=AIzaSyCAhsJhH9bL5zUz1C_nDy3RFfEAZZd28x0";
}

exports.navigatedTo = function( args ) {
	var page = args.object;
	place = page.navigationContext;
	data.set( "mapUrl", buildUrl() );
	page.bindingContext = data;
};

exports.loadMap = function( args ) {
	var view = args.object.android;
}
