Oceanicamp.Routers.Users = Support.SwappingRouter.extend({
	routes: {
		"users/:nickname": "show"
	},
	
	show: function( nickname ) {
		var user;

		if ( Oceanicamp.Global.Params && Oceanicamp.Global.Params.user )
			user = Oceanicamp.Global.Params.user;

		user = user || Oceanicamp.Global.Models.current_user

		var view = new Oceanicamp.Views.UsersShow({ model: user });
		$('body').html(view.render().$el);

		Oceanicamp.Global.Params = null;
	}
});
