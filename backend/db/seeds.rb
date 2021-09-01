require 'faker'
require 'pry'

# 200.times do
#     Artist.create(name: Faker::Music.band, genre: Faker::Music.genre)
# end

# 100.times do
#     Venue.create(name: Faker::FunnyName.name_with_initial + " Hall", location: Faker::Address.full_address)
# end

Concert.create(title: "Program The Dead in Pepe C. Cola Hall", venue_id: 1, artist_id: 1, date: Faker::Date.forward)
Concert.create(title: "Catherine Wheel in Phil A. Mignon Hall", venue_id:2 , artist_id: 2, date: Faker::Date.forward)