Oceanicamp.Routers.Teams = Backbone.Router.extend({
	routes: {
		"teams": 					"index",
		"teams/new": 			"create",
		"teams/:id": 			"show",
		"teams/:id/edit": "edit"
	},
	
	edit: function( id ) {
		var view = new Oceanicamp.Views.TeamsEdit({ model: new Oceanicamp.Models.Team({"_id": id}) });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	show: function( id ) {
		var view = new Oceanicamp.Views.TeamsShow({ model: new Oceanicamp.Models.Team({"_id": id}) });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	index: function() {
		if (!Oceanicamp.Global.Collections.teams) 
			Oceanicamp.Global.Collections.teams = new Oceanicamp.Collections.Teams();

		var view = new Oceanicamp.Views.TeamsIndex({ collection: Oceanicamp.Global.Collections.teams });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	},

	create: function() {
		var view = new Oceanicamp.Views.TeamsNew();
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	}
});
