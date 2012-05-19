class HomeController < ApplicationController

	skip_before_filter :require_login, :only => [:index]

  def index

  	if logged_in?
  		redirect_to user_path(current_user) 
  		return
  	end

  end

end
