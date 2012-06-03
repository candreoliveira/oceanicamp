Oceanicamp.Views.ActivitiesWinners = Support.CompositeView.extend({

  template: JST['activities/winners'],

  events: {
  	"click button.back": "showActivity",
  	"ajax:success form": "success",
  	"ajax:error form": "ajaxError"
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
		var teams = Oceanicamp.Global.Collections.Teams || new Oceanicamp.Collections.Teams();
		teams.fetch({async: false});
		this.$("#content-container").html(this.template({activity: this.model, teams: teams}));
	},

	showActivity: function() {
		this.leave();

		Oceanicamp.Global.Routers.activities.navigate("/activities/" + this.model.get("_id"), {trigger: true});
	},

	success: function( data, response ) {
		if (response.success) {
			this.showActivity();
		} else {
			alert("Falhou! Tente Novamente!");
		}
	},

	ajaxError: function() {
		alert("Houve uma falha na conexão ou no servidor!");
	}

});