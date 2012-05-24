Oceanicamp.Routers.Activities = Backbone.Router.extend({
	routes: {
		"activities": 					"index",
		"activities/new": 			"create",
		"activities/:id": 			"show",
		"activities/:id/edit": 	"edit"
	},
	
	edit: function( id ) {
		var view = new Oceanicamp.Views.ActivitiesEdit({ model: new Oceanicamp.Models.Activity({"_id": id}) });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	show: function( id ) {
		var view = new Oceanicamp.Views.ActivitiesShow({ model: new Oceanicamp.Models.Activity({"_id": id}) });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	index: function() {
		if (!Oceanicamp.Global.Collections.activities) 
			Oceanicamp.Global.Collections.activities = new Oceanicamp.Collections.Activities();

		var view = new Oceanicamp.Views.ActivitiesIndex({ collection: Oceanicamp.Global.Collections.activities });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	create: function() {
		var view = new Oceanicamp.Views.ActivitiesNew();
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	}

});
