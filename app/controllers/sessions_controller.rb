class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        current_user = User.find_by_id(session[:current_user_id])
        p current_user
        if current_user
          render json: {status:200, current_user: current_user}
        else
          render json: { status: 400, current_user_id: 'no session' }
        end
    end

    def login
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        session[:current_user_id] = user.id
        render json: {status: 200, user: user, session_id: session[:current_user_id]}
      else
        render json: {status: 401, message: "Unauthorized"}
      end
    end

end
