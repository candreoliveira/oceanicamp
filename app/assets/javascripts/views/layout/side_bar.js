Oceanicamp.Views.SideBar = Support.CompositeView.extend({
	template: JST['layout/side_bar'],

	events: {
		"click a": "choice"
	},

	initialize: function() {
		_.	bindAll(this, "render", "choice");
	},

	render: function () {
		this.$el.html(this.template({user: Oceanicamp.Global.Models.current_user}));
		return this;
	},

	choice: function ( event ) {
		event.preventDefault();

		var link 		= $(event.target),
				router 	= link.attr("data-router");

		switch ( router ) {
			case "campers":
				this.parent.leave();

				Oceanicamp.Global.Routers.campers.navigate(link.attr("href"), {trigger: true});

				break;
			case "rooms":
				break;
			case "teams":
				this.parent.leave();

				Oceanicamp.Global.Routers.teams.navigate(link.attr("href"), {trigger: true});
				break;
			default:
		}

	}

});
