# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Event.create(
    event_type: Faker::ChuckNorris.fact,
    event_date: Faker::Date.between(from: 1.year.ago, to: 1.year.from_now),
    title: Faker::Book.title,
    speaker: Faker::Name.name,
    host: Faker::Name.name,
    published: Faker::Boolean.boolean
  )
end


