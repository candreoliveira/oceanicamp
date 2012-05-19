Oceanicamp.Models.User = Backbone.Model.extend({

	idAttribute: "_id",

	// Schema que será usado pelo formulário de login
	schema: {
      name:       { type: 'Text', validators: ['required'] },
      password:   { type: 'Password', validators: ['required'] },
  }
});
