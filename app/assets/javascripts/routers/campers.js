Oceanicamp.Routers.Campers = Backbone.Router.extend({
	routes: {
		"campers": 					"index",
		"campers/new": 			"create",
		"campers/:id": 			"show",
		"campers/:id/edit": "edit"
	},
	
	edit: function( id ) {
		var view = new Oceanicamp.Views.CampersEdit({ model: new Oceanicamp.Models.Camper({"_id": id}) });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	show: function( id ) {
		var view = new Oceanicamp.Views.CampersShow({ model: new Oceanicamp.Models.Camper({"_id": id}) });
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
		var view = new Oceanicamp.Views.CampersNew();
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	}
});
