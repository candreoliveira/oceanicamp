Oceanicamp.Views.ActivitiesShow = Support.CompositeView.extend({

  template: JST['activities/show'],

  events: {
	},

	initialize: function() {
		_.bindAll(this, "render");

		this.model.bind("change", this.render);
		this.model.bind("add", this.render);
		this.model.bind("remove", this.render);
		this.model.bind("reset", this.render);

		this.model.fetch();
	},

	render: function () {
		this.renderLayout();
		this.renderContent();
		return this;
	},

	renderLayout: function() {
		this.$el.html(JST['layout/application']());
		
		var navBar = new Oceanicamp.Views.NavBar(),
				navBarContainer = this.$('#nav-bar');
		this.renderChildInto(navBar, navBarContainer);

		var sideBar = new Oceanicamp.Views.SideBar(),
				sideBarContainer = this.$('#side-bar');
		this.renderChildInto(sideBar, sideBarContainer);
	},

	renderContent: function() {
		this.$("#content-container").html(this.template({activity: this.model}))

		this.renderActivity();
	},

	renderActivity: function() {
		this.model;
	}

});
