Oceanicamp.Views.ActivityIndexView = Support.CompositeView.extend({

	tagName: "tr",

	template: JST['activities/index_view'],

	events: {
	},

	render: function () {
		this.$el.html(this.template({ activity: this.model }));
		return this;
	}

});
