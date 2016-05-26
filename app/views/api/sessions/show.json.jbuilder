if current_user
  json.first_name     current_user.first_name
  json.last_name     current_user.last_name
  json.cover_pic      current_user.cover_pic
  json.profile_pic    current_user.profile_pic
  json.email        current_user.email
  json.friend_request_id      current_user.friend_request_id
  json.id       current_user.id

else
  nil
end
