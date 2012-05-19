Oceanicamp.Views.CamperIndexView = Support.CompositeView.extend({

	tagName: "tr",

	template: JST['campers/index_view'],

	events: {
	},

	render: function () {
		this.$el.html(this.template({ model: this.model }));
		return this;
	}

});
