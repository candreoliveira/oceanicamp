I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"mongoid":{"errors":{"messages":{"blank":"can't be blank","taken":"is already taken","callbacks":"Calling %{method} on %{klass} resulted in a false return from a callback.","document_not_found":"Document not found for class %{klass} with id(s) %{identifiers}.","eager_load":"Eager loading :%{name} is not supported due to it being a many-to-many or polymorphic belongs_to relation.","invalid_database":"Database should be a Mongo::DB, not %{name}.","invalid_time":"'%{value}' is not a valid Time.","invalid_options":"Invalid option :%{invalid} provided to relation :%{name}. Valid options are: %{valid}.","invalid_type":"Field was defined as a(n) %{klass}, but received a %{other} with the value %{value}.","unsupported_version":"MongoDB %{version} not supported, please upgrade to %{mongo_version}.","validations":"Validation failed - %{errors}.","invalid_collection":"Access to the collection for %{klass} is not allowed since it is an embedded document, please access a collection from the root document.","invalid_field":"Defining a field named %{name} is not allowed. Do not define fields that conflict with Mongoid internal attributes or method names. Use Mongoid.destructive_fields to see what names this includes.","too_many_nested_attribute_records":"Accepting nested attributes for %{association} is limited to %{limit} records.","embedded_in_must_have_inverse_of":"Options for embedded_in association must include inverse_of.","dependent_only_references_one_or_many":"The dependent => destroy|delete option that was supplied is only valid on references_one or references_many associations.","association_cant_have_inverse_of":"Defining an inverse_of on this association is not allowed. Only use this option on embedded_in or references_many as array.","calling_document_find_with_nil_is_invalid":"Calling Document#find with nil is invalid","unsaved_document":"You cannot call create or create! through a relational association relation (%{document}) who's parent (%{base}) is not already saved.","mixed_relations":"Referencing a(n) %{embedded} document from the %{root} document via a relational association is not allowed since the %{embedded} is embedded.","no_environment":"Mongoid attempted to find the appropriate environment but no Rails.env, Sinatra::Base.environment, or RACK_ENV could be found.","scope_overwrite":"Cannot create scope :%{scope_name}, because of existing method %{model_name}.%{scope_name}.","blank_on_locale":"can't be blank in %{location}"}}},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","previous":"&lsaquo; Prev","next":"Next &rsaquo;","truncate":"..."}},"hello":"Hello world"}};