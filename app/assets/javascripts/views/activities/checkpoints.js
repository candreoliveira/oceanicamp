Oceanicamp.Views.ActivitiesCheckpoints = Support.CompositeView.extend({

  template: JST['activities/checkpoints'],

  events: {
  	"click button.back": "showActivity",
  	"click button.process": "closeActivity",
  	"keydown #barcode": "readBarCode",
  	"click button.send-barcode": "readBarCode"
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
		this.$("#content-container").html(this.template({activity: this.model}));
	},

	showActivity: function() {
		this.leave();

		Oceanicamp.Global.Routers.activities.navigate("/activities/" + this.model.get("_id"), {trigger: true});
	},

	closeActivity: function() {
		this.leave();

		this.model.set("processed", true);

		this.model.fetch({
			success: function(model, response) {
				Oceanicamp.Global.Routers.activities.navigate("/activities/" + this.model.get("_id"), {trigger: true});
			}, 
			error: function(model, response) {
				//Oceanicamp.Global.Routers.activities.navigate("/activities" + this.model.get("_id"), {trigger: true});
			}
		});
	},

	readBarCode: function( e ) {

		var bar_input = $("#barcode"),
				code 			= (e.keyCode) ? e.keyCode : e.which ;

		if (bar_input.val().length != 12 && !code) {
			alert("Código de Barras inválido!");
			return
		} else if ( code && code != 13 ) {
			return
		}

		$.post("/activities/" + this.model.get("_id") + "/create_checkpoint", {code: bar_input.val()}, function(data, response) {
			if (data.success) {
				bar_input.val("");
			} else {
				if ( data.already_exists ) {
					alert("Este usuário já fez checkin.");
					bar_input.val("");
				} else {
					alert("Falhou! Tente novamente.");
				}
			}
		});

	}

});