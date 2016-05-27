class Friendship < ActiveRecord::Base
  belongs_to :giving,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :receiving,
    foreign_key: :friend_id,
    primary_key: :id,
    class_name: "User"

end
