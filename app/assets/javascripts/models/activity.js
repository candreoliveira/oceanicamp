Oceanicamp.Models.Activity = Backbone.Model.extend({
	
	idAttribute: "_id",

	url: "/activities",

	schema: {
		title:       { type: 'Text', validators: ['required'] },
    checkpoint:  { type: 'Checkbox', validators: ['required'] },
    start_at:  	 { type: 'DateTime', validators: ['required'] },
		end_at:      { type: 'DateTime', validators: ['required'] }
	}
});
