class AddLongitudeToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :Longitude, :float
  end
end
