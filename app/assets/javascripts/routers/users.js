Oceanicamp.Routers.Users = Support.SwappingRouter.extend({
	routes: {
		"users/:nickname": "show"
	},
	
	show: function( nickname ) {
		var view = new Oceanicamp.Views.UsersShow({ model: Oceanicamp.Global.Params.user });
		$('body').html(view.render().$el);
		Oceanicamp.Global.Params = null;
	}
});
