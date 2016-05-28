# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  email: "joey@friends.com",
  password: "qweasd",
  first_name: "Joey",
  last_name: "Tribbiani",
  day: 1,
  month: "May",
  year: 1970,
  gender: "M",
  cover_pic: 'assets/Cover/cover1.jpg',
  profile_pic: 'assets/Profile/joey.jpg'
  )

User.create!(
  email: "chandler@friends.com",
  password: "qweasd",
  first_name: "Chandler",
  last_name: "Bing",
  day: 1,
  month: "May",
  year: 1970,
  gender: "M",
  cover_pic: 'assets/Cover/cover2.jpg',
  profile_pic: 'assets/Profile/chandler.jpg'
  )
User.create!(
  email: "monica@friends.com",
  password: "qweasd",
  first_name: "Monica",
  last_name: "Geller",
  day: 1,
  month: "May",
  year: 1970,
  gender: "F",
  cover_pic: 'assets/Cover/cover3.jpg',
  profile_pic: 'assets/Profile/monica.jpg'
  )
User.create!(
  email: "phoebe@friends.com",
  password: "qweasd",
  first_name: "Phoebe",
  last_name: "Buffay",
  day: 1,
  month: "May",
  year: 1970,
  gender: "F",
  cover_pic: 'assets/Cover/cover4.jpg',
  profile_pic: 'assets/Profile/phoebe.jpg'
  )
User.create!(
  email: "rachel@friends.com",
  password: "qweasd",
  first_name: "Rachel",
  last_name: "Green",
  day: 1,
  month: "May",
  year: 1970,
  gender: "F",
  cover_pic: 'assets/Cover/cover5.jpg',
  profile_pic: 'assets/Profile/rachel.jpg'
  )
User.create!(
  email: "ross@friends.com",
  password: "qweasd",
  first_name: "Ross",
  last_name: "Geller",
  day: 1,
  month: "May",
  year: 1970,
  gender: "M",
  cover_pic: 'assets/Cover/cover6.jpg',
  profile_pic: 'assets/Profile/ross.jpg'
  )

User.create!(
  email: "nhat@friends.com",
  password: "qweasd",
  first_name: "Nhat",
  last_name: "Ho",
  day: 1,
  month: "May",
  year: 1970,
  gender: "M",
  cover_pic: 'assets/Cover/cover7.jpg',
  profile_pic: 'assets/Profile/nhat.jpg'
  )

Post.create!(
  body: "OMG! Is Ross and Rachel still on a break? Is that why they're not friends?",
  author_id: 3
)

Post.create!(
  body: "How you doin?!",
  author_id: 1
)

Post.create!(
body: "Ross is such a jerk.",
author_id: 5
)

Post.create!(
body: "WE WERE ON A BREAK!",
author_id: 6
)

Post.create!(
  body: "Can today BE anymore ridiculous?",
  author_id: 2
)

Post.create!(
  body: "Smelly cat smelly cat, what are they feeding you?",
  author_id: 4
)

Post.create!(
  body: "Hey thanks for adding me! You're my only friend right now. =[",
  author_id: 7
)


Friendship.create!(
  user_id: 1,
  friend_id: 2,
  confirmed: true
)
Friendship.create!(
  user_id: 1,
  friend_id: 3,
  confirmed: true
)
Friendship.create!(
  user_id: 1,
  friend_id: 4,
  confirmed: true
)
Friendship.create!(
  user_id: 1,
  friend_id: 5,
  confirmed: true
)
Friendship.create!(
  user_id: 1,
  friend_id: 6,
  confirmed: true
)
Friendship.create!(
  user_id: 2,
  friend_id: 3,
  confirmed: true
)
Friendship.create!(
  user_id: 2,
  friend_id: 4,
  confirmed: true
)
Friendship.create!(
  user_id: 2,
  friend_id: 5,
  confirmed: true
)
Friendship.create!(
  user_id: 2,
  friend_id: 6,
  confirmed: true
)
Friendship.create!(
  user_id: 3,
  friend_id: 4,
  confirmed: true
)
Friendship.create!(
  user_id: 3,
  friend_id: 5,
  confirmed: true
)
Friendship.create!(
  user_id: 3,
  friend_id: 6,
  confirmed: true
)
Friendship.create!(
  user_id: 4,
  friend_id: 5,
  confirmed: true
)
Friendship.create!(
  user_id: 4,
  friend_id: 6,
  confirmed: true
)
