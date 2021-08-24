class AddDateToConcerts < ActiveRecord::Migration[5.2]
  def change
    add_column :concerts, :date, :string
  end
end
