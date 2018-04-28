class SignupController < ApplicationController

    def new

    end

    def create
      render json: User.create(params["user"])
    end

end
