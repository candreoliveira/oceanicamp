class ApplicationController < ActionController::Base
  
  protect_from_forgery
  before_filter :require_login

  #helper_method :errors_content
  #rescue_from Exception, :with => :render_404 if Rails.env == "production"

  protected

  def render_404
    render :file => Rails.root.to_s + "/public/404.html", :status => 404, :layout => "one_column"
  end

  def render_500
    render :file => Rails.root.to_s + "/public/500.html", :status => 500, :layout => "one_column"
  end

  def render_422
    render :file => Rails.root.to_s + "/public/422.html", :status => 422, :layout => "one_column"
  end    

  def not_authenticated
    redirect_to root_path, :alert => {:title => "Login", :content => "Voce precisa estar logado!"}
  end

end
