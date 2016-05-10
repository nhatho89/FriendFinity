class Api::SessionsController < ApplicationController
  def show
    render :show
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render json: {error: "User not found"}, status: 401
    else
      sign_in(user)
      render json: current_user
    end
  end

  def destroy
    sign_out! if current_user
    render json: ["Logout successfully"]
  end
end
