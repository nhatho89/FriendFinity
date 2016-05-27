json.array! @peopleYouMayKnow do |person|
  json.id person.id
  json.first_name person.first_name
  json.last_name person.last_name
  json.email person.email
  json.gender person.gender
  json.profile_pic person.profile_pic
  json.cover_pic person.cover_pic
end
