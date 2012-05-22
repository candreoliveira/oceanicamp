Oceanicamp.Views.CampersIndex = Support.CompositeView.extend({

  template: JST['campers/index'],

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
		this.$("#side-bar a[href='/campers']").parent().addClass("active");

		this.renderCampers();
	},

	renderCampers: function() {
		this.collection.each(this.addOne);
	},

	addOne: function( camper ) {
    var camperView = new Oceanicamp.Views.CamperIndexView({model: camper});
    this.renderChild(camperView);
    this.$("table tbody").append(camperView.el);
  }
});
