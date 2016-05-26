class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :month, null: false
      t.integer :day, null: false
      t.integer :year, null: false
      t.string :gender, null: false
      t.string :profile_pic
      t.string :cover_pic
      t.integer :friend_request_id
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
