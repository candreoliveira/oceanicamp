Oceanicamp.Routers.Home = Support.SwappingRouter.extend({
	routes: {
		"": "index"
	},
	
	index: function() {
		var view = new Oceanicamp.Views.HomeIndex();
		$('body').html(view.render().$el);
	}
});
