Oceanicamp.Views.TeamsNew = Support.CompositeView.extend({

  template: JST['teams/new'],

	events: {
		"click #team-form-submit": "submitForm"
	},

	initialize: function() {
		_.bindAll(this);

		this.model = new Oceanicamp.Models.Team();
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
		this.$("#side-bar a[href='/teams/new']").parent().addClass("active");

		this.form = new Backbone.Form({
        model: this.model
    }).render();

    this.$("#content-container #team-form").prepend(this.form.el);
	},

	submitForm: function( e ) {
		var errors = this.form.commit();

		if ( !errors ) {
			this.model.save();

			this.model = new Oceanicamp.Models.Team();
			this.render();
		}
	}
});
