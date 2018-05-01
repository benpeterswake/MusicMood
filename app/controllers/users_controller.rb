class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    render json: User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(username: user_params["username"], password: user_params["password_digest"])
      if @user.save
        render json: { status: 200, }
      else
        render json: @user.errors, status: :unprocessable_entity
      end
  end

  def update
    @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        render json: { status: 200, user: @user }
      else
        render json: { status: 400 }
      end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  # def destroy
  #   @user.destroy
  #   respond_to do |format|
  #     format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:id, :username, :password_digest)
    end
end
