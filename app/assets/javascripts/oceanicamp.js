var Oceanicamp = {
	Models: 			{},
	Collections: 	{},
	Views: 				{},
	Routers: 			{},
	Global: {
		Models: 			{},
		Collections: 	{},
		Routers: 			{},
		Params: 			null
	},
	initialize: function( params ) {
		// só pode ser inicializado após o DOM estar pronto!
		$(function(){
			Oceanicamp.Global.Routers.home 				= new Oceanicamp.Routers.Home();
			Oceanicamp.Global.Routers.users 			= new Oceanicamp.Routers.Users();
			Oceanicamp.Global.Routers.campers 		= new Oceanicamp.Routers.Campers();
			Oceanicamp.Global.Routers.teams 			= new Oceanicamp.Routers.Teams();
			Oceanicamp.Global.Routers.activities 	= new Oceanicamp.Routers.Activities();

			Oceanicamp.Global.Params = params;

			if ( params && params.user ) 
				Oceanicamp.Global.Models.current_user = new Oceanicamp.Models.User( params.user );

			Backbone.history.start({pushState: true});
		});
	}
};
