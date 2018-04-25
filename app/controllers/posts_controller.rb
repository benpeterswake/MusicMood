class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: { message: 'hi', status: 200 }
    # render json: Posts.all
  end

  # def show
  #   render json: Posts.find(params.["id"])
  # end
  #
  # def create
  #   render json: Posts.create(params["posts"])
  # end
  #
  # def delete
  #   render json: Posts.delete(params["id"])
  # end
  #
  # def update
  #   render json: Posts.update(params["id"], params["posts"])
  # end

end
