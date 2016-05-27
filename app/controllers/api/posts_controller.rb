class Api::PostsController < ApplicationController
  def index
    
    newsfeed_ids = friend_ids(current_user)
    @posts = Post.all

    if post_params[:author_id]
      @posts = @posts.where(author_id: newsfeed_ids).order(created_at: :desc)
    end
  end

  def create
    @post = Post.new(
      author_id: post_params[:author_id].to_i,
      body: post_params[:body]
    )

    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  # def destroy
  #   @post = Post.find(post_params[:author_id])
  #   @post.destroy
  #   render :show
  # end

  private

  def friend_ids(current_user)
    ids = []
    ids << current_user.id
    current_user.friends.each do |friend|
      ids << friend.id
    end
    ids
  end

  def post_params
    params.require(:post).permit(:body, :author_id)
  end

end
