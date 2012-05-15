Oceanicamp.Views.NavBar = Support.CompositeView.extend({
	template: JST['layout/nav_bar'],
	className: "navbar-inner",

	events: {
	},

	render: function () {
		this.$el.html(this.template({user: Oceanicamp.Global.Models.current_user}));
		return this;
	}
});
