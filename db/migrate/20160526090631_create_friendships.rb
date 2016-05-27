class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :friend_id, null: false
      t.integer :user_id, null: false
      t.boolean :denied, default: false, null: false
      t.boolean :confirmed, default: false, null: false
      t.timestamps null: false
    end
    add_index :friendships, :friend_id, using: :btree
    add_index :friendships, :user_id, using: :btree
  end
end
