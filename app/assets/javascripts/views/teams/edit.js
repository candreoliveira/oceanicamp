Oceanicamp.Views.TeamsEdit = Support.CompositeView.extend({

  template: JST['teams/edit'],

	events: {
		"click #team-form-submit": "submitForm",
		"click button.back": "backTeam"
	},

	initialize: function() {
		_.bindAll(this);

		this.model.bind("change", this.render);
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
		this.$("#content-container").html(this.template({team: this.model}))

		this.form = new Backbone.Form({
        model: this.model
    }).render();

    this.$("#content-container #team-form").prepend(this.form.el);
	},

	submitForm: function( e ) {
		var errors = this.form.commit();

		if ( !errors ) {
			this.model.save();
		}
	},

	backTeam: function() {
		this.leave();

		Oceanicamp.Global.Routers.teams.navigate("/teams/"+ this.model.get("_id"), {trigger: true});
	}
});
