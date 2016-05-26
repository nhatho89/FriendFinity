json.array! @posts do |post|
  json.id post.id
  json.author_id post.author_id
  json.body post.body
end
