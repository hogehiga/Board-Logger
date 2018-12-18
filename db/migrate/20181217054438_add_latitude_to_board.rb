class AddLatitudeToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :latitude, :float
  end
end
