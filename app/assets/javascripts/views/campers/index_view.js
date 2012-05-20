Oceanicamp.Views.CamperIndexView = Support.CompositeView.extend({

	tagName: "tr",

	template: JST['campers/index_view'],

	events: {
	},

	render: function () {
		this.$el.html(this.template({ camper: this.model }));
		return this;
	}

});
