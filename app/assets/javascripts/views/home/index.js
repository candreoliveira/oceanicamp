Oceanicamp.Views.HomeIndex = Support.CompositeView.extend({
	template: JST['home/index'],
	className: "row-fluid",
	id: "login-container",

	events: {
		"ajax:success form": "success"
	},

	render: function () {
		this.$el.html(this.template());
		return this;
	},

	success: function( status, data, xhr ) {

		if ( data.success ) {

			this.leave();

			var user = Oceanicamp.Global.Models.current_user = new Oceanicamp.Models.User(data.user);

			Oceanicamp.Global.Params = { user: user }
			Oceanicamp.Global.Routers.users.navigate("users/" + user.get('nickname'), {trigger: true, replace: true})

		} else {
			alert("falha");
		}

	}
});
