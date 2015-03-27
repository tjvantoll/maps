var observableModule = require( "data/observable" );

exports.loaded = function( args ) {
	var page = args.object;
	var pageData = new observableModule.Observable();
	pageData.set( "lat", "42.7" );
	pageData.set( "lon", "23.3" );
	page.bindingContext = pageData;
}
