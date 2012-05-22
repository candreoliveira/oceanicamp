Oceanicamp.Models.Activity = Backbone.Model.extend({
	
	idAttribute: "_id",

	urlRoot: "/activities",

	schema: {
		title:       { type: 'Text', validators: ['required'] },
    checkpoint:  { type: 'Checkbox', validators: ['required'] },
    start_at:  	 { type: 'DateTime', validators: ['required'] },
		end_at:      { type: 'DateTime', validators: ['required'] }
	}
});
