Oceanicamp.Views.CampersEdit = Support.CompositeView.extend({

  template: JST['campers/edit'],

	events: {
		"click #camper-form-submit": "submitForm",
		"click button.back": "backCamper"
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
		this.$("#content-container").html(this.template({camper: this.model}))

		this.form = new Backbone.Form({
        model: this.model
    }).render();

    this.$("#content-container #camper-form").prepend(this.form.el);
	},

	submitForm: function( e ) {
		var errors = this.form.commit();

		if ( !errors ) {
			this.model.save();
		}
	},

	backCamper: function() {
		this.leave();

		Oceanicamp.Global.Routers.campers.navigate("/campers/"+ this.model.get("_id"), {trigger: true});
	}
});
