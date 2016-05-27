class Api::PeopleController < ApplicationController
  def index
    @user = [current_user]
    @friends = @user.first.friends
    @all_people = User.all

    @peopleYouMayKnow = @all_people - @friends - @user
  end

end
