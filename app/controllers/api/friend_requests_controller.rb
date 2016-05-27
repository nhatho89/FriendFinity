class Api::FriendRequestsController < ApplicationController
  def index
      @user = User.where(id: params[:user_id]).to_a.first
      @req = @user.received_requests
    end

    def destroy
      user_id = current_user.id
      @friendship = Friendship.where(
        "user_id = ? AND friend_id = ?",
        params[:friendId], user_id
      ).to_a[0]

      if @friendship.destroy
        render json: {
          requests: current_user.received_requests.map {|req| {user: req}}
        }
      else
        render json: {}, status: 420
      end
    end
end
