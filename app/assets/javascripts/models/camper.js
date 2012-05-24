Oceanicamp.Models.Camper = Backbone.Model.extend({

	idAttribute: "_id",

	urlRoot: "/campers",

	schema: {
		name:       { type: 'Text', validators: ['required'] },
    email:      { dataType: 'email', validators: ['required', 'email'] },
    birthday:   { type: 'Date', validators: ['required'] },
		church:       'Text',
    phones:     { type: 'List', help: 'Camper Phones' }
	},

	team: function() {
		if ( this.has("team_id") ) {
			Oceanicamp.Global.Collections.Teams = Oceanicamp.Global.Collections.Teams || new Oceanicamp.Collections.Teams()

			var team = _.filter( Oceanicamp.Global.Collections.Teams, function(t) {
				return t.get("_id") == this.get("team_id")
			}, this);

			if ( team ) {
				return team;
			} else {
				Oceanicamp.Global.Collections.Teams.fetch()

				team = _.filter( Oceanicamp.Global.Collections.Teams, function(t) {
					return t.get("_id") == this.get("team_id")
				}, this);

				if ( team ) return team;
				else return undefined;
			}

		} else {
			return undefined
		}
	},

	room: function() {
		return undefined
	},

	validate: function( attrs ) {
		if ( typeof attrs.name != "string" || ( typeof attrs.name == "string"&&  attrs.name.length < 3 ) ) {
			return "Name have to be a string and it's length bigger than 2 characters!";
		}
	}
});
