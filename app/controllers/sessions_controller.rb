class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        render json: {status: 200, user: user, session_id: user.id}
      else
        render json: {status: 401, message: "Unauthorized"}
      end
    end

end
