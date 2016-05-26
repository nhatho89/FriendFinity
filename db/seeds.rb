# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  email: "test@gmail.com",
  password: "qweasd",
  first_name: "test",
  last_name: "account",
  day: 12,
  month: "May",
  year: 1989,
  gender: "M",
  cover_pic: "",
  profile_pic: ""
  )

User.create!(
  email: "test2@gmail.com",
  password: "qweasd",
  first_name: "test",
  last_name: "account",
  day: 12,
  month: "May",
  year: 1989,
  gender: "M",
  cover_pic: "",
  profile_pic: ""
  )

Post.create!(
  body: "this app is pretty empty",
  author_id: 1
)
