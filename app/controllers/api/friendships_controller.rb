class Api::FriendshipsController < ApplicationController
  def index
    @user = current_user
    @friends = @user.friends
  end

  def create
    @friendship = Friendship.new(
    friend_id: params[:friend][:friend_id],
    user_id: current_user.id,
    confirmed: true
    )

    if @friendship.save
      friend = User.find_by(id: params[:friend][:friend_id])
      render json: {
        id: friend.id,
        first_name: friend.first_name,
        last_name: friend.last_name,
        email: friend.email,
        gender: friend.gender,
        profile_pic: friend.profile_pic,
        cover_pic: friend.cover_pic
      }
    else
      render json: {}, status: 420
    end

  end

  def destroy
    user_id = current_user.id
    @friendship = Friendship.where(
      "(user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)",
      user_id, params[:friend][:friend_id], params[:friend][:friend_id], user_id
    ).to_a[0]
    if @friendship.destroy
      friend = User.find_by(id: params[:friend][:friend_id])
      render json: {
        id: friend.id,
        first_name: friend.first_name,
        last_name: friend.last_name,
        email: friend.email,
        gender: friend.gender,
        profile_pic: friend.profile_pic,
        cover_pic: friend.cover_pic
      }
    else
      render json: {}, status: 420
    end
  end
end
