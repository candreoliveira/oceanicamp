module ApplicationHelper
  def initialize_javascript(param = nil)

  	if current_user
  		param = params || {}
  		param[:user] = current_user.as_json unless param.has_key?(:user) || param.has_key?("user")
  	end

    if param
      json = ActiveSupport::JSON.encode(param)

      ("<script type='text/javascript'>Oceanicamp.initialize(#{json})</script>").html_safe
    else
    	('<script type="text/javascript">Oceanicamp.initialize(null)</script>').html_safe
    end
  end
end
