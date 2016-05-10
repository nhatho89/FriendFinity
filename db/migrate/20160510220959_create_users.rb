class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   "session_token", null: false
      t.string   "first_name", null: false
      t.string   "last_name", null: false
      t.string   "email", null: false
      t.string   "profile_url", null: false
      t.string   "cover_url", null: false
      t.string   "password_digest", null: false
      t.integer  "friend_request_id"
      t.timestamps null: false
      end
    end
end
