FactoryGirl.define do
  factory :item do
    name { Faker::Lorem.word }
    description { Faker::Lorem.word }
    done false
  end
end
