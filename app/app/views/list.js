var application = require( "application" );

var frameModule = require( "ui/frame" ),
	observableModule = require( "data/observable" ),
	el = require( "../models/el" ),
	places = require( "../models/places" ),
	moment = require( "../node_modules/moment/moment" ),
	data = new observableModule.Observable();

data.set( "places", places );

exports.load = function( args ) {
	args.object.bindingContext = data;

	if ( places.length ) {
		return;
	}

	el.data( "Places" ).get().then(function( data ) {
		data.result.forEach(function( place ) {
			place.PushDate = moment( place.PushDate ).format( "dddd, MMMM Do, YYYY" );
			places.push( place );
		});
	});
};

exports.details = function( args ) {
	var index = args.index;
	frameModule.topmost().navigate({
		moduleName: "app/views/details",
		context: places.getItem( index )
	});
};
