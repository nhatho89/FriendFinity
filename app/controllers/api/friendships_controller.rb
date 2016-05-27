class FriendshipsController < ApplicationController
  def index
    @user = current_user
    @friends = @user.friends
  end

  def create
    @friendship = Friendship.new(
    friend_id: params[:friendId],
    user_id: current_user.id,
    )
    if @friendship.save
      render json: {
        friend_id: params[:friendId],
        user_id: current_user.id
      }
    else
      render json: {}, status: 420
    end

  end

  def destroy
    user_id = current_user.id
    @friendship = Friendship.where(
      "(user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)",
      user_id, params[:friendId], params[:friendId], user_id
    ).to_a[0]
    if @friendship.destroy
      render json: {
        friendship: @friendship
      }
    else
      render json: {}, status: 420
    end
  end

  def update
    friend_id = current_user.id
    @friendship = Friendship.where(
    "user_id = ? AND friend_id = ?",
    params[:userId], friend_id
    ).to_a[0]

    if @friendship.update({confirmed: true})
      render json: {
        requests: current_user.received_requests.map {|req| {user: req}},
        friends: current_user.friends
      }
    else
      render json: {}, status: 420
    end
  end
end
