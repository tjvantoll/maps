var observableModule = require( "data/observable" ),
	pageData = new observableModule.Observable(),
	page;

exports.loaded = function( args ) {
	page = args.object;
	page.bindingContext = pageData;
}

exports.navigatedTo = function( args ) {
	var place = args.object.navigationContext;
	page.ios.title = place.Name + ", " + place.Country;
	pageData.set( "latitude", place.Latitude );
	pageData.set( "longitude", place.Longitude );
};
