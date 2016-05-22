class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   "first_name", null: false
      t.string   "last_name", null: false
      t.string   "profile_pic", null: false
      t.string   "cover_pic", null: false
      t.integer  "friend_request_id"

      t.timestamps null: false
    end
  end
end
