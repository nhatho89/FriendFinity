class User < ActiveRecord::Base
  validates :email, :first_name, :last_name, :gender, :month, :day, :year, :password_digest, :session_token, presence: true

  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "Post"

  has_many :requesting_friendships,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "Friendship"

  has_many :receiving_friendships,
    foreign_key: :friend_id,
    primary_key: :id,
    class_name: "Friendship"


  def friends
    requesting_friendships = self.requesting_friendships.where(confirmed: true).to_a
    receiving_friendships = self.receiving_friendships.where(confirmed: true).to_a
    all_friendships = requesting_friendships + receiving_friendships
    all_friends = all_friendships.map do |friendship|
      friendship.user_id == self.id ? friendship.receiving : friendship.giving
    end
    all_friends
  end

  def received_requests
    receiving_friendships = self.receiving_friendships.where(confirmed: false, denied: false).to_a
    incoming_requests = receiving_friendships.map do |request|
      request.giving
    end
    incoming_requests
  end

  def made_requests
    requesting_friendships = self.requesting_friendships.where(confirmed: false).to_a
    outgoing_requests = requesting_friendships.map do |friendship|
      friendship.user_id == self.id ? friendship.receiving : friendship.giving
    end
    outgoing_requests
  end

  def name
    self.first_name + ' ' + self.last_name
  end


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
