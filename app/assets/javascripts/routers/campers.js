Oceanicamp.Routers.Campers = Backbone.Router.extend({
	routes: {
		"campers": 			"index",
		"campers/:id": 	"show",
		"campers/new": 	"create"
	},
	
	show: function( id ) {
		var view = new Oceanicamp.Views.CampersShow({ model: Oceanicamp.Global.Params.camper });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	index: function() {
		if (!Oceanicamp.Global.Collections.campers) 
			Oceanicamp.Global.Collections.campers = new Oceanicamp.Collections.Campers();

		var view = new Oceanicamp.Views.CampersIndex({ collection: Oceanicamp.Global.Collections.campers });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	create: function() {

	}
});
