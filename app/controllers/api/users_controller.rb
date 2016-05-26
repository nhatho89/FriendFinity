class Api::UsersController < ApplicationController
  before_action :require_no_user!

  def create
    @user = User.new(
    email: user_params[:email],
    password: user_params[:password],
    first_name: user_params[:firstName],
    last_name: user_params[:lastName],
    day: user_params[:day].to_i,
    month: user_params[:month],
    year: user_params[:year].to_i,
    gender: user_params[:gender],)
    if @user.save
      sign_in(@user)
      render json: current_user
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:firstName, :lastName, :day, :gender, :month, :year, :email, :password)
  end
end
