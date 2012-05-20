Oceanicamp.Views.TeamsIndex = Support.CompositeView.extend({

  template: JST['teams/index'],

	events: {
	},

	initialize: function() {
		_.bindAll(this, "render", "addOne", "renderLayout", "renderContent", "renderCampers");

		this.collection.bind("change", this.render);
		this.collection.bind("add", this.render);
		this.collection.bind("remove", this.render);
		this.collection.bind("reset", this.render);

		this.collection.fetch();
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
		this.$("#content-container").html(this.template())
		this.$("#side-bar a[href='/teams']").parent().addClass("active");

		this.renderCampers();
	},

	renderCampers: function() {
		this.collection.each(this.addOne);
	},

	addOne: function( team ) {
    var teamView = new Oceanicamp.Views.TeamIndexView({model: team});
    this.renderChildInto(teamView, this.$("table tbody"));
  },

});
