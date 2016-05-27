json.array! @friends do |friend|
  json.id friend.id
  json.first_name friend.first_name
  json.last_name friend.last_name
  json.email friend.email
  json.friend_id friend.friend_id
  json.gender friend.gender
  json.profile_pic friend.profile_pic
  json.cover_pic friend.cover_pic
end
