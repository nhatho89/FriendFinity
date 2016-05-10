class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  # has_many :trip_reservations,
  #   foreign_key: :guest_id,
  #   primary_key: :id,
  #   class_name: 'Reservation'
  #
  # has_many :host_rooms

  after_initialize :ensure_session_token

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
