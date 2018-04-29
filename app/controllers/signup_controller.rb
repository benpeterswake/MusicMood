class SignupController < ApplicationController
  skip_before_action :verify_authenticity_token

    def create
      render json: Signup.create(params["signup"])
    end

end
