Oceanicamp.Views.ActivitiesIndex = Support.CompositeView.extend({

  template: JST['activities/index'],

  events: {
  	"click a.show": "showActivity"
	},

	initialize: function() {
		_.bindAll(this, "render", "addOne", "renderLayout", "renderContent", "renderActivities", "showActivity");

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
		this.$("#side-bar a[href='/activities']").parent().addClass("active");

		this.renderActivities();
	},

	renderActivities: function() {
		this.collection.each(this.addOne);
	},

	addOne: function( activity ) {
    var activityView = new Oceanicamp.Views.ActivityIndexView({model: activity});
    this.renderChild(activityView);
    this.$("table tbody").append(activityView.el);
  },

  showActivity: function( event ) {
  	event.preventDefault();

  	var link = $(event.target);

  	this.leave();

  	Oceanicamp.Global.Routers.activities.navigate(link.attr("href"), {trigger: true});

  }

});
