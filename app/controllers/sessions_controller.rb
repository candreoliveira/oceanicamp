class SessionsController < ApplicationController

  skip_before_filter :require_login, :only => [:create]

  def new
  end

  def create
    # loga no sistema
    user = login(params["user"]["nickname"], params["user"]["password"], true)

    # se estiver logado
    if logged_in?
      # retorna o json de sucesso
      render :json => {:user => user.as_json, :success => true}
    else
      render :json => {:success => false}
    end
  end

  def destroy
    logout
    redirect_to root_url, :notice => "Logged out!"
  end
end
