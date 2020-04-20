# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    event_type { Faker::ChuckNorris.fact }
    event_date { Faker::Date.between(from: 1.year.ago, to: 1.year.from_now) }
    title { Faker::Book.title }
    speaker { Faker::Name.name }
    host { Faker::Name.name }
    published { Faker::Boolean.boolean }
  end
end
