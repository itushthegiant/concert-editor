class Concert < ActiveRecord::Base
    belongs_to :artist
    has_many :venues
end