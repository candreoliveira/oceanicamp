Oceanicamp.Models.Team = Backbone.Model.extend({

	_idAttribute: "_id",

	url: "/teams",

	schema: {
		name:       { type: 'Text', validators: ['required'] },
    leaders:    { type: 'List', help: 'Leaders' }
	},

	validate: function( attrs ) {
		if ( typeof attrs.name != "string" || ( typeof attrs.name == "string"&&  attrs.name.length < 3 ) ) {
			return "Name have to be a string and it's length bigger than 2 characters!";
		}
	}
});
