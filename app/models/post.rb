class Post < ActiveRecord::Base
  validates :body, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id

  def author_name
    author.name
  end
end
