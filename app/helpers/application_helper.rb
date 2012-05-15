module ApplicationHelper
  def initialize_javascript(param = nil)
    if param
      json = ActiveSupport::JSON.encode(param)

      ("<script type='text/javascript'>Oceanicamp.initialize(#{json})</script>").html_safe
    else
    	('<script type="text/javascript">Oceanicamp.initialize(null)</script>').html_safe
    end
  end
end
