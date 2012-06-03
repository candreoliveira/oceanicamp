Oceanicamp.Models.Activity = Backbone.Model.extend({
	
	idAttribute: "_id",

	urlRoot: "/activities",

	schema: {
		title:       		{ type: 'Text', validators: ['required'] },
    checkpoint:  		{ type: 'Checkbox', validators: ['required'] },
    with_ranking:		{ type: 'Checkbox', validators: ['required'] },
    ranking_points: { type: 'List', help: "Liste em ordem os a quantidade de pontos que as equipes vão ganhar nessas determinadas posições" },
    start_at:  	 		{ type: 'DateTime', validators: ['required'] },
		end_at:      		{ type: 'DateTime', validators: ['required'] }
	}
});
