Oceanicamp.Views.TeamIndexView = Support.CompositeView.extend({

	tagName: "tr",

	template: JST['teams/index_view'],

	events: {
	},

	render: function () {
		this.$el.html(this.template({ team: this.model }));
		return this;
	}

});
