class Api::PostsController < ApplicationController
  def index
    @posts = Post.all

    if post_params[:author_id]
      @posts = @posts.where(author_id: post_params[:author_id].to_i).order(created_at: :desc)
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

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:body, :author_id)
  end

end
