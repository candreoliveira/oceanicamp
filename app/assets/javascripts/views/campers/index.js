Oceanicamp.Views.CampersIndex = Support.CompositeView.extend({

  template: JST['campers/index'],
	events: {
	},

	initialize: function() {
		this.collection.bind("change", this.render);
		this.collection.bind("add",this.render);
		this.collection.bind("remove", this.render);
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
	}

});
