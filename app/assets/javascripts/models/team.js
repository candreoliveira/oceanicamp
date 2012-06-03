Oceanicamp.Models.Team = Backbone.Model.extend({

	idAttribute: "_id",

	urlRoot: "/teams",

	schema: {
		name:       { type: 'Text', validators: ['required'] }
	},

	validate: function( attrs ) {
		if ( typeof attrs.name != "string" || ( typeof attrs.name == "string"&&  attrs.name.length < 3 ) ) {
			return "Name have to be a string and it's length bigger than 2 characters!";
		}
	},

	toString: function() {
		return this.get('name');
	}
});
