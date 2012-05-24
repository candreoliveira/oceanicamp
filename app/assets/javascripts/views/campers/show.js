Oceanicamp.Views.CampersShow = Support.CompositeView.extend({

  template: JST['campers/show'],

  events: {
  	"click button.back": "showAll",
  	"click button.edit": "editCamper",
  	"click button.delete": "deleteCamper"
	},

	initialize: function() {
		_.bindAll(this);

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
		this.$("#content-container").html(this.template({camper: this.model}))

		this.renderCamper();
	},

	renderCamper: function() {
		this.model;
	},

	showAll: function() {
		this.leave();

		Oceanicamp.Global.Routers.campers.navigate("/campers", {trigger: true});
	},

	editCamper: function() {
		this.leave();

		Oceanicamp.Global.Routers.campers.navigate("/campers/"+ this.model.get("_id") + "/edit", {trigger: true});
	},

	deleteCamper: function() {
		console.log("deleteCamper")
	}

});
