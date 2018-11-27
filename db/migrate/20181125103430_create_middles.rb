class CreateMiddles < ActiveRecord::Migration[5.2]
  def change
    create_table :middles do |t|
      t.integer :user_id
      t.references :board, foreign_key: true

      t.timestamps
    end
  end
end
