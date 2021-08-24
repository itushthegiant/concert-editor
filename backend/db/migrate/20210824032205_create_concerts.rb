class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
      t.string :title
      t.integer :venue_id
      t.integer :artist_id
    end
  end
end
