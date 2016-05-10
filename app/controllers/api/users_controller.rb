class Api::UsersController < ApplicationController
  before_action :require_no_user!

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: current_user
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
